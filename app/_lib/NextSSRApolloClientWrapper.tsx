"use client";

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ApolloLink, HttpLink } from "@apollo/client";
import React from "react";

export function ApolloNextAppProviderWrapper({
  children,
}: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider
      makeClient={() => {
        const httpLink = new HttpLink({
          fetchOptions: {
            reconnect: true,
          },
          // https://studio.apollographql.com/public/spacex-l4uc6p/
          uri: "http://localhost:8080/graphql",
        });
        return new NextSSRApolloClient({
          cache: new NextSSRInMemoryCache(),
          link:
            typeof window === "undefined"
              ? ApolloLink.from([
                  new SSRMultipartLink({
                    stripDefer: true,
                  }),
                  httpLink,
                ])
              : httpLink,
        });
      }}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
