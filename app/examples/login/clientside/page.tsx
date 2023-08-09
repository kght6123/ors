"use client";
import {
  LogoutButton,
  LoginButton,
} from "$/examples/login/clientside/_clientside";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

// http://localhost:3000/login/clientside/

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default async function Home() {
  return (
    <NextAuthProvider>
      <ClientSideHome />
    </NextAuthProvider>
  );
}

function ClientSideHome() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session.user", session?.user);
  }, [session]);

  return (
    <main className="container flex flex-col content-center items-center justify-center gap-4 p-4">
      <div>
        <div>{`${JSON.stringify(session?.user)}`}</div>
        {session?.user ? <div>Logged in</div> : <div>Not logged in</div>}
        {session?.user ? (
          <LogoutButton>ログアウトする</LogoutButton>
        ) : (
          <LoginButton>ログイン</LoginButton>
        )}
      </div>
    </main>
  );
}
