import { LogoutButton, LoginButton } from "$/login/clientside";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { authOptions } from "$/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Button } from "$/_ui/atoms/button";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <CalendarDaysIcon className="h-20 w-20" />
      <h1 className="text-base font-black">○○○○○○○ オンライン予約サイト</h1>
      <p className="pb-24 text-xs">
        新しい予約の登録や、登録した予約の変更が行えます
      </p>
      {user ? (
        <>
          <Button.Basic color="primary">予約を開始する</Button.Basic>
          <LogoutButton>ログアウトする</LogoutButton>
        </>
      ) : (
        <LoginButton>ログイン／新規登録</LoginButton>
      )}
      <div className="text-xs">
        {user ? "ログイン中" : "利用するにはログインまたは新規登録をして下さい"}
      </div>
      <div className="hidden break-all text-xs">{`${JSON.stringify(
        user
      )}`}</div>
    </>
  );
}
