"use client";
import { useMessageContext, messageContext } from "./context";
import Child1 from "./child1";
import Child2 from "./child2";

// http://localhost:3000/examples/context/

/**
 * 子供のコンポーネントと親のコンポーネントでContextを使って値を共有する
 *
 * @returns
 */
export default async function Home() {
  const {
    message: [addMessage, setAddMessage],
  } = useMessageContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <messageContext.Provider value={{ message: [addMessage, setAddMessage] }}>
        <Child1 />
        <Child2 />
      </messageContext.Provider>
      <label htmlFor="parent">
        parent:
        <input
          onChange={(e) => setAddMessage(e.target.value)}
          placeholder="文字を入力してね！Context経由で子供に反映されるよ！"
          value={addMessage}
          type="text"
          id="parent"
        />
      </label>
    </main>
  );
}
