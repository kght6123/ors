import type { NextApiResponse, NextApiRequest } from "next";

import dgraph from "dgraph-js";

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse /*<Data>*/
) {
  // クライアントの設定
  const clientStub = new dgraph.DgraphClientStub(
    "localhost:9080"
    // grpc.credentials.createInsecure() as any
  );
  const dgraphClient = new dgraph.DgraphClient(clientStub);
  // トランザクションを開始
  const txn = dgraphClient.newTxn();

  switch (req.method) {
    case "POST":
      try {
        // データ（ノード）を作成
        const data = {
          name: req.query.name,
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
        res.status(200).json({ res: response.getUidsMap().toArray() });
      } finally {
        // トランザクションを破棄
        await txn.discard();
        // クライアントを閉じる
        clientStub.close();
      }
      break;
    case "GET":
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
        res.status(200).json({ data });
      } finally {
        // トランザクションを破棄
        await txn.discard();
        // クライアントを閉じる
        clientStub.close();
      }
  }
}
