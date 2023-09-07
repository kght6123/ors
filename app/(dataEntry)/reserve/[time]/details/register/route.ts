import { db, reserveDateTimes, reserveUserDetails } from "#/schema";
import { ReserveDetail } from "$/(dataEntry)/reserve/_schema";
import { authOptions } from "$/api/auth/[...nextauth]/route";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function POST(
  request: Request
  // { params }: { params: { time: string } }
) {
  // 準備
  const { realName, tel, time } = ReserveDetail.parse(await request.formData());
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  // バリデーション
  if (!userId) {
    return NextResponse.json(
      { error: "ログイン情報が存在しません。" },
      { status: 401 }
    );
  }
  // 登録
  await db
    .transaction(async (tx) => {
      const r1 = db
        .insert(reserveDateTimes)
        .values({
          reserved_at: new Date(time),
          userId,
        })
        .run();
      console.log(r1);
      const r2 = db
        .insert(reserveUserDetails)
        .values({
          id: userId,
          realName,
          tel,
        })
        // 同一IDが存在する場合に更新する処理
        .onConflictDoUpdate({
          set: { realName, tel },
          target: reserveUserDetails.id,
        })
        .run();
      console.log(r2);
    })
    .catch((e) => {
      console.error(e);
      return NextResponse.json(
        { error: "予約に失敗しました。" },
        { status: 500 }
      );
    });
  // キャッシュを更新 TODO: このバグが原因で動かない https://github.com/vercel/next.js/issues/54173
  revalidatePath("/reserve");
  return NextResponse.json({
    name: realName,
    tel,
    time,
  });
}
