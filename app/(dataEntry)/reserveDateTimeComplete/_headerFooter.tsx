"use client";
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
            <div />
            <h1 className="text-base font-black">○○○○○○○ 予約登録・変更完了</h1>
            <div />
          </>,
          headerEl
        )}
      {footerEl &&
        createPortal(
          <NextLink href="/reserveDateTime">
            <Button.Basic color="secondary">予約日時を変更する</Button.Basic>
          </NextLink>,
          footerEl
        )}
    </>
  );
}
