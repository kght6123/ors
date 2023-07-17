import React from "react";
import clsx from "clsx";

export type Rounded = "full" | "none";
export type Color =
  | "secondary"
  | "warning"
  | "success"
  | "primary"
  | "danger"
  | "info"
  | "mono";
export type Font = "normal" | "bold";
export type Spacing = "none" | "lg" | "md" | "sm" | "xs";
export type Size = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export interface Ui {
  rounded?: Rounded;
  spacing?: Spacing;
  color?: Color;
  font?: Font;
  size?: Size;
}

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

// ロジックは基底のButtonに集約する
const Base = ({ children, className, onClick }: Props) => {
  return (
    // DaisyUIのクラスはロジック側に書く、基本は上書きできるため。
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};

// 基底のButtonに対して、UIのバリエーションを追加する。主に機能だけ使い回ししたい場合にバリエーションをb追加する
const Button = {
  Base,
  Basic: (props: Props & Ui) => {
    const { color = "mono", rounded = "full", size = "md" } = props;
    return (
      <Base
        className={clsx(
          "text-center text-base font-bold",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-indigo-500 text-indigo-50 hover:bg-indigo-600",
          color === "info" && "bg-blue-400 text-blue-50 hover:bg-blue-500",
          color === "mono" && "bg-gray-200 text-gray-950 hover:bg-gray-300",
          size === "md" && "h-16 w-full",
          props.className
        )}
        {...props}
      />
    );
  },
};

// それぞれのボタンの見た目は、基底のButtonに対して、バリエーションを追加する
export { Button };
