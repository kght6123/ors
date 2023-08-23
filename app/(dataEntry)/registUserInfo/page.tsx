import { redirect } from "next/navigation";

// MEMO: これがないと、F5リロードなどしたときに404エラーになる
export default async function RegistUserInfo() {
  redirect("/reserveDateTime");
}
