import { ReserveDetail } from "$/(dataEntry)/reserve/_schema";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
  // { params }: { params: { time: string } }
) {
  const { realName, tel, time } = ReserveDetail.parse(await request.formData());
  return NextResponse.json({ name: realName, tel, time });
}
