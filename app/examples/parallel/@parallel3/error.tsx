"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  reset: () => void;
  error: Error;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="bg-red-500">
      <span className="text-white">{error.message}</span>
      <div>
        <button className="btn-error btn-sm btn" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
