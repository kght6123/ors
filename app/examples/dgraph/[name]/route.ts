import { NextResponse, NextRequest } from "next/server";
import { notFound } from "next/navigation";
import dgraph from "dgraph-js";
// import grpc from "grpc";

// TODO: Cookieを取得するとき
// import { cookies } from "next/headers";
// TODO: リダイレクトするとき
// import { redirect } from "next/navigation";
// TODO: headerを取得するとき
// import { headers } from 'next/headers';

import "server-only";

export async function POST(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = params.name;
  // return NextResponse.json({ name });

  // クライアントの設定
  const clientStub = new dgraph.DgraphClientStub(
    "localhost:9080"
    // grpc.credentials.createInsecure() as any
  );
  const dgraphClient = new dgraph.DgraphClient(clientStub);
  // トランザクションを開始
  const txn = dgraphClient.newTxn();
  try {
    // データ（ノード）を作成
    const data = {
      name,
    };
    // データをJSONにエンコード
    const mutation = new dgraph.Mutation();
    mutation.setSetJson(data);
    // ミューテーションをコミット
    const response = await txn.mutate(mutation);
    // コミット
    await txn.commit();
    // レスポンスを表示
    console.log(response.getUidsMap().toArray());
    // レスポンスを返す
    return NextResponse.json({ res: response.getUidsMap().toArray() });
  } finally {
    // トランザクションを破棄
    await txn.discard();
    // クライアントを閉じる
    clientStub.close();
  }
  // const res = await request.json();
  // if (res === undefined) {
  //   notFound();
  // }
  // return NextResponse.json({ res });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  // 動的パスの場合は、params.slugを使用して、URLの動的な値を取得できます。
  const name = params.name;
  // return NextResponse.json({ name });
  // クライアントの設定
  const clientStub = new dgraph.DgraphClientStub(
    "localhost:9080"
    // grpc.credentials.createInsecure() as any
  );
  const dgraphClient = new dgraph.DgraphClient(clientStub);
  // トランザクションを開始
  const txn = dgraphClient.newTxn();
  try {
    // クエリの作成
    const query = `
          query {
              all(func: has(name)) {
                  uid
                  name
              }
          }
      `;
    // クエリの実行
    const response = await txn.query(query);
    // JSONにデコード
    const data = response.getJson();
    // 結果を表示
    console.log(data);
    // レスポンスを返す
    return NextResponse.json({ data });
  } finally {
    // トランザクションを破棄
    await txn.discard();
    // クライアントを閉じる
    clientStub.close();
  }

  // TDOD: URLパラメータを取得するとき
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const product = await res.json()
  // return NextResponse.json({ product })

  // TODO: 60秒キャッシュするとき
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   next: { revalidate: 60 }, // Revalidate every 60 seconds
  // })
  // const data = await res.json()

  // TODO: Cookieを取得するとき
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')

  // return new Response('Hello, Next.js!', {
  //   status: 200,
  //   headers: { 'Set-Cookie': `token=${token}` },
  // })

  // TODO: headerを取得するとき
  // const headersList = headers()
  // const referer = headersList.get('referer')
  // return new Response('Hello, Next.js!', {
  //   status: 200,
  //   headers: { referer: referer },
  // })

  // TODO: リダイレクトするとき
  // redirect('https://nextjs.org/')
}
