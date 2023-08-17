"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import gql from "graphql-tag";
import React from "react";

const query = gql`
  query {
    queryReserveDateTime {
      id
      date
      time
      user {
        email
        name
        tel
      }
    }
  }
`;

export default function Clientside() {
  const { data } = useSuspenseQuery(query) as any;
  return <div>{data.queryReserveDateTime}</div>;
}
