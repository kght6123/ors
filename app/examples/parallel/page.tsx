import { RenderedTimeAgo } from "#/ui/examples/rendered-time-ago";
import { getWebCams } from "$/api/examples/getWebCams";
// http://localhost:3000/examples/parallel/
export default async function Home() {
  const webCams = await getWebCams();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
      <div>
        {webCams.map((webCam) => (
          <div key={webCam.name}>{webCam.name}</div>
        ))}
      </div>
    </main>
  );
}
