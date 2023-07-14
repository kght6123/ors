import "$/globals.css";

export const metadata = {
  title: "React Portal",
  description: "React Portal app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>
        ヘッダーだよ<span id="header">React Portalで置き換える</span>
      </h1>
      {children}
      <h1>
        フッターだよ<span id="footer">React Portalで置き換える</span>
      </h1>
    </>
  );
}
