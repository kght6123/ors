import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      picture: undefined | string | null;
      id: string;
    };
  }
}
