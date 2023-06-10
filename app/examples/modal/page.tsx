import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";

// http://localhost:3000/examples/modal/ ← ここから遷移して、Linkを辿るとモーダルになる
// http://localhost:3000/examples/modal/contents/6 ← URL直入力するとモーダルなしで表示される

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	gap-6 m-10">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((id) => (
          <Link
            key={id}
            href={`/examples/modal/contents/${id}`}
            className="aspect-square flex place-content-center place-items-center dark:bg-gray-800 bg-gray-400 text-9xl"
          >
            {id}
          </Link>
        ))}
      </div>
    </main>
  );
}
