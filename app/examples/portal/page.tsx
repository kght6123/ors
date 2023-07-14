import ClientSide from "./clientside";

export default function Portal() {
  return (
    // http://localhost:3000/examples/portal;
    <main className="bg-slate-700 p-4">
      <div>React Portalのテストだよ！</div>
      <ClientSide />
    </main>
  );
}
