import "$/globals.css";

export const metadata = {
  description: "React Portal app.",
  title: "React Portal",
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
