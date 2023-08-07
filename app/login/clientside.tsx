"use client";

import { signOut, signIn } from "next-auth/react";
import { Button } from "$/_ui/atoms/button";
import { ReactNode } from "react";

export const LoginButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button.Basic onClick={() => signIn()} color="primary">
      {children}
    </Button.Basic>
  );
};

export const LogoutButton = ({ children }: { children: ReactNode }) => {
  return (
    <Button.Basic onClick={() => signOut()} color="secondary">
      {children}
    </Button.Basic>
  );
};
