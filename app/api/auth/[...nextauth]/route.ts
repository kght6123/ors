// import type { AdapterUser, Adapter } from "next-auth/adapters";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
// import { DgraphAdapter } from "@auth/dgraph-adapter";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { db } from "#/schema";

export const authOptions: NextAuthOptions = {
  // adapter: DgraphAdapter({
  //   // you can omit the following properties if you are running an unsecure schema
  //   authHeader: process.env.AUTH_HEADER || "Authorization", // default: "Authorization",
  //   authToken: process.env.DGRAPH_GRAPHQL_KEY || "NextAuth",
  //   endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT || "localhost:9080",
  //   jwtSecret: process.env.NEXTAUTH_SECRET || "",
  // }) as Adapter,
  adapter: DrizzleAdapter(db),
  callbacks: {
    jwt: async ({ account, profile, token, user }) => {
      if (user) {
        token.user = user;
        if ("role" in user) {
          token.role = user.role;
        }
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
          role: token.role,
        },
      };
    },
  },
  debug:
    process.env.NEXTAUTH_DEBUG === undefined
      ? true
      : Boolean(process.env.NEXTAUTH_DEBUG),
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    //   sendVerificationRequest: async (params) => {
    //     console.log("sendVerificationRequest", params);
    //   },
    // }),
    CredentialsProvider({
      async authorize(credentials) {
        // TODO: データベースなどからのユーザ情報取得を書く
        const users = [
          { email: "user1@example.com", id: "1", password: "password1" },
          { email: "user2@example.com", id: "2", password: "password2" },
          { email: "abc@abc", id: "3", password: "123" },
        ];
        // !!! ユーザ認証をする !!!
        // パスワードのハッシュやソルトなどは全く考慮していないので、各自、実装すること
        const user = users.find((user) => user.email === credentials?.email);
        if (user && user?.password === credentials?.password) {
          return {
            email: user.email,
            id: user.id,
            name: user.email,
            role: "admin",
          };
        } else {
          return null;
        }
      },
      credentials: {
        email: {
          label: "メールアドレス",
          placeholder: "メールアドレスを入力して下さい",
          type: "email",
        },
        password: {
          label: "パスワード",
          placeholder: "パスワードを入力して下さい",
          type: "password",
        },
      },
      name: "パスワード",
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
