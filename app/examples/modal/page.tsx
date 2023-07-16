import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";

// http://localhost:3000/examples/modal/ ← ここから遷移して、Linkを辿るとモーダルになる
// http://localhost:3000/examples/modal/contents/6 ← URL直入力するとモーダルなしで表示される

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div className="m-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2	md:grid-cols-3 lg:grid-cols-3">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((id) => (
          <Link
            className="flex aspect-square place-content-center place-items-center bg-gray-400 text-9xl dark:bg-gray-800"
            href={`/examples/modal/contents/${id}`}
            key={id}
          >
            {id}
          </Link>
        ))}
      </div>
    </main>
  );
}
