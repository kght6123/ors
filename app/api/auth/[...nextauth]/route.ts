import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";
import { DgraphAdapter } from "@auth/dgraph-adapter";

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
      sendVerificationRequest: async (params) => {
        console.log("sendVerificationRequest", params);
      },
    }),
  ],
  adapter: DgraphAdapter({
    endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT || "",
    authToken: process.env.DGRAPH_GRAPHQL_KEY || "",
    // you can omit the following properties if you are running an unsecure schema
    authHeader: process.env.AUTH_HEADER || "Authorization", // default: "Authorization",
    jwtSecret: process.env.SECRET || "",
  }) as Adapter,
});

export { handler as GET, handler as POST };
