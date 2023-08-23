"use client";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useHeaderFooter } from "$/(dataEntry)/_hooks";
import { Button } from "$/_ui/atoms/button";
import { createPortal } from "react-dom";
import NextLink from "next/link";
import React from "react";

export default function HeaderFooter() {
  const [headerEl, footerEl] = useHeaderFooter();
  return (
    <>
      {headerEl &&
        createPortal(
          <>
            <Button.Back>
              <ChevronLeftIcon className="h-5 w-5" />
            </Button.Back>
            <h1 className="text-base font-black">○○○○○○○ 予約登録・変更</h1>
            <div />
          </>,
          headerEl
        )}
      {footerEl &&
        createPortal(
          <Button.Basic
            form="reservedDateTimeSelectorForm"
            color="primary"
            type="submit"
          >
            予約する
          </Button.Basic>,
          footerEl
        )}
    </>
  );
}
