import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await fetch(`https://api.oceandrivers.com:443/v1.0/getWebCams/`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const webcams = await res.json();

  if (webcams.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    return NextResponse.json({ status: 404 });
  }
  return NextResponse.json({ webcams });
}
