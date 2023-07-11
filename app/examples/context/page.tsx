"use client";
import Child1 from "./child1";
import Child2 from "./child2";
import { messageContext, useMessageContext } from "./context";

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
          type="text"
          onChange={(e) => setAddMessage(e.target.value)}
          value={addMessage}
          placeholder="文字を入力してね！Context経由で子供に反映されるよ！"
          id="parent"
        />
      </label>
    </main>
  );
}
