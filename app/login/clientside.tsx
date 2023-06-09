"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button className="btn" onClick={() => signIn()}>
      ログインする
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className="btn" onClick={() => signOut()}>
      ログアウトする
    </button>
  );
};
