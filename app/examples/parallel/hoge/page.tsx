import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";
import { getWebCams } from "$/api/examples/getWebCams";

// http://localhost:3000/examples/parallel/hoge
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div>hogehoge</div>
    </main>
  );
}
