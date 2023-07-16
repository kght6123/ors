import { LogoutButton, LoginButton } from "$/login/clientside";
import { authOptions } from "$/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className="container flex flex-col content-center items-center justify-center gap-4 p-4">
      <div>{`${JSON.stringify(user)}`}</div>
      {user ? <div>ログイン中</div> : <div>ログインして下さい</div>}
      {user ? <LogoutButton /> : <LoginButton />}
    </main>
  );
}
