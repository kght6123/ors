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
        className="w-1/2 mx-auto border border-gray-700 text-9xl aspect-square flex place-content-center place-items-center"
      >
        {id}
      </Link>
    </div>
  );
}
