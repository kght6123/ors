export default function Layout({
  children,
  parallel1,
  parallel2,
  parallel3,
}: {
  parallel3: React.ReactNode;
  parallel2: React.ReactNode;
  parallel1: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        {children}
        {parallel1}
        {parallel2}
        {parallel3}
      </div>
    </>
  );
}
