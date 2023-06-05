import React from "react";

// http://localhost:3000/examples/globalerror

export default async function Home() {
  throw new Error('グローバルエラーテスト');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      エラーテスト
    </main>
  );
}
