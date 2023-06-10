"use client"; // Error components must be Client Components

import { useEffect } from "react";

/**
 * エラー（throwなど）が発生した場合に表示されるコンポーネント。rootのlayout.tsxやtemplate.tsxで起きたエラーはこれで表示されない
 *
 * @param param0
 * @returns
 */
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="fixed top-0 left-auto right-auto w-screen flex items-center content-center justify-center shadow opacity-80 p-4">
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-white shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-white">{error.message}</span>
        <div>
          <button className="btn btn-sm btn-error" onClick={() => reset()}>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
