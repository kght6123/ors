import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Container } from "$/_ui/atoms/container";
import { Button } from "$/_ui/atoms/button";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "$/globals.css";

import { WorldMap } from "../WorldMap";

export const metadata = {
  description: "Simple Online Reservation App.",
  title: "Online Reservation System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-full justify-center overflow-hidden overflow-y-auto bg-slate-50 pb-28 pt-20 dark:bg-slate-950"
      )}
    >
      <Container.Floating
        className="z-20 flex w-screen flex-row items-center justify-between px-6 py-5"
        color="secondary"
        position="top"
      >
        <Button.Back>
          <ChevronLeftIcon className="h-5 w-5" />
        </Button.Back>
        <h1 className="text-base font-black">○○○○○○○ 予約登録・変更</h1>
        <div />
      </Container.Floating>
      <WorldMap className="fixed -right-32 -top-20 h-[115svh] fill-slate-100/90 stroke-slate-950/5" />
      <main className="container relative z-10 gap-4 bg-slate-950/80 p-4 backdrop-blur before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 md:max-h-fit md:max-w-sm md:rounded">
        {children}
      </main>
      <Container.Floating
        className="z-20 w-screen px-6 py-5"
        color="secondary"
        position="bottom"
      >
        <Button.Basic color="primary">予約する</Button.Basic>
      </Container.Floating>
    </div>
  );
}
