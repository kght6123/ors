import { NextResponse } from "next/server";
import type { WebCam } from "$/api/examples/webcam";

export async function GET(request: Request) {
  const res = await fetch(`https://api.oceandrivers.com:443/v1.0/getWebCams/`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const webcams = (await res.json()) as WebCam[];

  if (webcams.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    return NextResponse.json({ status: 404 });
  }
  return NextResponse.json({ webcams });
}
