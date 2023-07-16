"use client";
import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";
import Skeleton from "#/ui/examples/skeleton";
import { Suspense } from "react";
import useSWR from "swr";

async function fetchHogeHoge(api: boolean = false) {
  const res = await fetch(`/examples/dgraph/hogehoge`, {
    method: "GET",
    next: { revalidate: 60 },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await res.json();
  console.log(data, new Date().getTime());
  return data;
}

export function HogeHogeMain() {
  const { data, error, isLoading } = useSWR<any, Error, [boolean]>(
    [false],
    ([api]) => fetchHogeHoge(api)
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
      <Suspense fallback={<Skeleton />}>
        <span className="font-semibold tabular-nums text-gray-900 dark:text-gray-100">
          {error ? (
            "faild to load!!!"
          ) : isLoading ? (
            <Skeleton />
          ) : (
            JSON.stringify(data)
          )}
        </span>
      </Suspense>
      <button
        onClick={() => {
          fetch(`/examples/dgraph/hogehoge`, {
            body: JSON.stringify({
              age: 20,
              name: "hoge",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, new Date().getTime());
              alert(JSON.stringify(data));
            });
        }}
        className="rounded-lg bg-blue-500 p-4 text-white shadow-lg"
      >
        Regist Hoge
      </button>
    </main>
  );
}
