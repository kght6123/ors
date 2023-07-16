// MEMO: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
import { Montserrat } from "next/font/google";
import "$/globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  description: "Static Generated app.",
  title: "StaticGenerated",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
