import Link from "next/link";
import React from "react";

export default function ContentsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto my-10">
      <Link
        className="mx-auto flex aspect-square w-1/2 place-content-center place-items-center border border-slate-700 text-9xl"
        href={`/examples/modal`}
      >
        {id}
      </Link>
    </div>
  );
}
