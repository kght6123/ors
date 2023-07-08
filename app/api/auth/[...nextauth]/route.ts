import NextAuth, { NextAuthOptions } from "next-auth";
import type { Adapter, AdapterUser } from "next-auth/adapters";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { DgraphAdapter } from "@auth/dgraph-adapter";

export const authOptions: NextAuthOptions = {
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
      name: "パスワード",
      credentials: {
        email: {
          label: "メールアドレス",
          type: "email",
          placeholder: "メールアドレスを入力して下さい",
        },
        password: {
          label: "パスワード",
          type: "password",
          placeholder: "パスワードを入力して下さい",
        },
      },
      async authorize(credentials) {
        const users = [
          { id: "1", email: "user1@example.com", password: "password1" },
          { id: "2", email: "user2@example.com", password: "password2" },
          { id: "3", email: "abc@abc", password: "123" },
        ];
        const user = users.find((user) => user.email === credentials?.email);
        if (user && user?.password === credentials?.password) {
          return {
            id: user.id,
            name: user.email,
            email: user.email,
            role: "admin",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
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
          role: token.role,
          accessToken: token.accessToken,
        },
      };
    },
  },
  adapter: DgraphAdapter({
    endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT || "localhost:9080",
    authToken: process.env.DGRAPH_GRAPHQL_KEY || "NextAuth",
    // you can omit the following properties if you are running an unsecure schema
    authHeader: process.env.AUTH_HEADER || "Authorization", // default: "Authorization",
    jwtSecret: process.env.NEXTAUTH_SECRET || "",
  }) as Adapter,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
