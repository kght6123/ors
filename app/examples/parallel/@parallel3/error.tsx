"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="bg-red-500">
      <span className="text-white">{error.message}</span>
      <div>
        <button className="btn btn-sm btn-error" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
