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
          type="text"
          id="child2"
          onChange={(e) => setAddMessage(e.target.value)}
          value={addMessage}
          placeholder="文字を入力してね！Context経由で親に反映されるよ！"
        />
      </label>
    </>
  );
}
