"use client";

import { signOut, signIn } from "next-auth/react";
import { Button } from "$/_ui/atoms/button";

export const LoginButton = () => {
  return (
    <Button.Basic onClick={() => signIn()} color="primary">
      ログインする
    </Button.Basic>
  );
};

export const LogoutButton = () => {
  return (
    <Button.Basic onClick={() => signOut()} color="info">
      ログアウトする
    </Button.Basic>
  );
};
