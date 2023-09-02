import { db, reserveDateTimes, userDetails } from "#/schema";
import { ReserveDetail } from "$/(dataEntry)/reserve/_schema";
import { authOptions } from "$/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function POST(
  request: Request
  // { params }: { params: { time: string } }
) {
  const { realName, tel, time } = ReserveDetail.parse(await request.formData());
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId)
    return NextResponse.json(
      { error: "ログイン情報が存在しません。" },
      { status: 401 }
    );
  db.insert(reserveDateTimes)
    .values({
      id: time.toString(),
      reserved_at: new Date(time),
      userId,
    })
    .onConflictDoUpdate({
      set: { reserved_at: new Date(time) },
      target: reserveDateTimes.userId,
    });
  return NextResponse.json({ name: realName, tel, time });
}
