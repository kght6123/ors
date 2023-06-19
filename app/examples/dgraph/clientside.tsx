"use client";
import { use } from "react";
import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";

async function fetchHogeHoge() {
  // MEMO: pages/apiだと上手くいくが、app/apiだと上手くいかない。Next.jsの問題？
  const res = await fetch(
    `http://localhost:3000/api/examples/dgraph2/hogehoge`, // MEMO: フルパスで指定しないと、pagesのAPIを叩くのでサーバサイドで実行される時にエラーになる？？
    { method: "GET" }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default function HogeHogeMain() {
  const data = use(fetchHogeHoge());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div>{data ? JSON.stringify(data) : "loading..."}</div>
      <button
        className="p-4 bg-blue-500 text-white rounded-lg shadow-lg"
        onClick={() => {
          fetch(`/api/examples/dgraph2/hogehoge`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "hoge",
              age: 20,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              alert(JSON.stringify(data));
            });
        }}
      >
        Regist Hoge
      </button>
    </main>
  );
}
