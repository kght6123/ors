// import '$/globals.css'
// MEMO: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  description: "root 2 app.",
  title: "Root2",
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
