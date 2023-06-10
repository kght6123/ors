import "$/globals.css";
// MEMO: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "StaticGenerated",
  description: "Static Generated app.",
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
