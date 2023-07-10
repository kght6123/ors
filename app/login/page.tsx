import { LoginButton, LogoutButton } from "$/login/clientside";
import { getServerSession } from "next-auth/next";
import { authOptions } from "$/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="flex flex-col gap-4 p-4 container content-center justify-center items-center">
      <div>{`${JSON.stringify(user)}`}</div>
      {user ? <div>ログイン中</div> : <div>ログインして下さい</div>}
      {user ? <LogoutButton /> : <LoginButton />}
    </main>
  );
}
