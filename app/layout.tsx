import { Inter } from "next/font/google";
import clsx from "clsx";
import "$/globals.css";

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
          "flex h-[100dvh] place-content-center place-items-center bg-gray-50 dark:bg-gray-950"
        )}
      >
        {children}
      </body>
    </html>
  );
}
