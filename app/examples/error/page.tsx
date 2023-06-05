import React from "react";

// http://localhost:3000/examples/error

export default async function Home() {
  throw new Error('エラーテスト');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      エラーテスト
    </main>
  );
}
