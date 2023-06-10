export default function Layout({
  children,
  parallel1,
  parallel2,
  parallel3,
}: {
  children: React.ReactNode;
  parallel1: React.ReactNode;
  parallel2: React.ReactNode;
  parallel3: React.ReactNode;
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
