import { RenderedTimeAgo } from '#/ui/examples/rendered-time-ago';

// http://localhost:3000/examples/modal/login/
export default async function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RenderedTimeAgo timestamp={Date.now()} />
    </main>
  )
}
