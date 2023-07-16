// import '$/globals.css'
// MEMO: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  description: "root 1 app.",
  title: "Root1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notojp.className}>{children}</body>
    </html>
  );
}
