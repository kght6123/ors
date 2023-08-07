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
          "relative flex h-[100dvh] place-content-center place-items-center bg-gray-50 dark:bg-gray-950"
        )}
      >
        <WorldMap className="absolute -right-32 h-[115svh] fill-white/10 stroke-gray-950/5" />
        <main className="container z-10 flex flex-col content-center items-center justify-center gap-4 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
