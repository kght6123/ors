import { createContext, useState, Dispatch, SetStateAction } from "react";

export type MessageContext = {
  message: [string, Dispatch<SetStateAction<string>>];
};

export const messageContext = createContext<MessageContext>({
  message: ["", () => {}],
});

export const useMessageContext = (): MessageContext => {
  const message = useState("");
  return {
    message,
  };
};
