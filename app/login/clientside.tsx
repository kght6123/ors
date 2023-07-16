"use client";

import { signOut, signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button onClick={() => signIn()} className="btn">
      ログインする
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button onClick={() => signOut()} className="btn">
      ログアウトする
    </button>
  );
};
