// import { getBaseUrl } from '#/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import type { WebCam } from './webcam';

// `server-only`は、ファイルにコードをインポートするモジュールがクライアント上で実行されないことを保証します。 この特定の API は現在機密性の高い環境変数を使用していませんが、先制的に`server-only`を追加することをお勧めします。
import 'server-only';

/**
 * 
 * @see https://api.oceandrivers.com/static/docs.html
 * @param param0 
 * @returns 
 */
export async function getWebCams({ parent }: { parent?: string } = {}) {
  await new Promise(resolve => setTimeout(resolve, 30 * 1000))

  const res = await fetch(
    `https://api.oceandrivers.com:443/v1.0/getWebCams/`,
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const webcams = (await res.json()) as WebCam[];

  if (webcams.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return webcams;
}
