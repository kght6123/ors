"use client";
import { useContext } from "react";
import { messageContext } from "./context";

export default function Child1() {
  const {
    message: [addMessage, setAddMessage],
  } = useContext(messageContext);
  return <div>{"child1 = " + addMessage}</div>;
}
