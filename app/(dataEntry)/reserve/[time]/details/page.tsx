import { redirect } from "next/navigation";

// MEMO: これがないと、F5リロードなどしたときに404エラーになる。
// MEMO: 実際にモーダルの表示をしているのは、 app/(dataEntry)/@modal/(.)reserveDateTime/registUserInfo/page.tsx である。
export default async function RegistUserInfo() {
  // redirect("/reserve");
}
