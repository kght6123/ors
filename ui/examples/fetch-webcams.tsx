"use client";
import { use } from "react";
import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";

async function fetchWebcams() {
  const res = await fetch(`/examples/routehandlers/webcams`);
  const data = await res.json();
  console.log(data);
  return data;
}

export default function fetchWebcamsMain() {
  const data = use(fetchWebcams());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div>{data ? JSON.stringify(data) : "loading..."}</div>
    </main>
  );
}
