import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { HttpLink } from "@apollo/client";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      // fetchOptions: { cache: "no-store" },
      fetchOptions: {
        reconnect: true,
      },
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: "http://localhost:8080/graphql",
    }),
  });
});
