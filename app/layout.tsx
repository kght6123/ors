import { Inter } from "next/font/google";
import clsx from "clsx";
import "$/globals.css";

import { WorldMap } from "./WorldMap";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="ja">
      <body
        className={clsx(
          inter.className,
          "relative flex h-[100dvh] content-center items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
        )}
      >
        <WorldMap className="absolute -right-32 h-[115svh] fill-slate-100/90 stroke-slate-950/5" />
        <main className="container z-10 flex h-[100dvh] flex-col content-center items-center justify-center gap-4 bg-slate-950/80 p-4 md:max-h-[46rem] md:max-w-sm md:rounded">
          {children}
        </main>
      </body>
    </html>
  );
}
