import { UserPlusIcon } from "@heroicons/react/24/outline";
import { Square } from "$/_ui/atoms/square";
import React from "react";

export const Fixture = {
  basic: (
    <Square.Basic
      className="relative grid h-14 w-full grid-cols-[5rem,1fr]"
      color="secondary"
      tone="50"
    >
      <div className="flex h-full items-center pl-3 text-sm font-bold text-gray-500">
        10:00
      </div>
      <div className="p-[.3rem]">
        <Square.Basic
          className="flex h-full content-center items-center justify-center text-sm font-semibold"
          color="danger"
          rounded="xl"
        >
          予約済み
        </Square.Basic>
      </div>
    </Square.Basic>
  ),
};

export default Fixture;
