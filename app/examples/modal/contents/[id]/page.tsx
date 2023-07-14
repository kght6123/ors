import React from "react";
import Link from "next/link";

export default function ContentsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto my-10">
      <Link
        href={`/examples/modal`}
        className="mx-auto flex aspect-square w-1/2 place-content-center place-items-center border border-gray-700 text-9xl"
      >
        {id}
      </Link>
    </div>
  );
}
