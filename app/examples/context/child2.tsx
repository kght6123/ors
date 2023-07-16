"use client";
import { useContext } from "react";

import { messageContext } from "./context";

export default function Child2() {
  const {
    message: [addMessage, setAddMessage],
  } = useContext(messageContext);
  return (
    <>
      <label htmlFor="child2">
        child2:
        <input
          onChange={(e) => setAddMessage(e.target.value)}
          placeholder="文字を入力してね！Context経由で親に反映されるよ！"
          value={addMessage}
          type="text"
          id="child2"
        />
      </label>
    </>
  );
}
