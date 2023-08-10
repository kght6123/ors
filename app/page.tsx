import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { authOptions } from "$/api/auth/[...nextauth]/route";
import { LogoutButton, LoginButton } from "$/_clientside";
import { getServerSession } from "next-auth/next";
import { Button } from "$/_ui/atoms/button";
import { Link } from "$/_ui/atoms/link";
import clsx from "clsx";

import { WorldMap } from "./WorldMap";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div
      className={clsx(
        "relative flex h-[100dvh] content-center items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
      )}
    >
      <WorldMap className="absolute -right-32 h-[115svh] fill-slate-100/90 stroke-slate-950/5" />
      <main className="container relative z-10 flex h-[100dvh] flex-col content-center items-center justify-center gap-4 bg-slate-950/80 p-4 backdrop-blur before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 md:max-h-[46rem] md:max-w-sm md:rounded">
        <CalendarDaysIcon className="h-20 w-20" />
        <h1 className="text-base font-black">○○○○○○○ オンライン予約サイト</h1>
        <p className="pb-24 text-xs">
          新しい予約の登録や、登録した予約の変更が行えます
        </p>
        {user ? (
          <>
            <Link.Basic href="/reserveDateTime" color="primary" shallow>
              予約を開始する
            </Link.Basic>
            <LogoutButton>ログアウトする</LogoutButton>
          </>
        ) : (
          <LoginButton>ログイン／新規登録</LoginButton>
        )}
        <div className="text-xs">
          {user
            ? "ログイン中"
            : "利用するにはログインまたは新規登録をして下さい"}
        </div>
        <div className="hidden break-all text-xs">{`${JSON.stringify(
          user
        )}`}</div>
      </main>
    </div>
  );
}
