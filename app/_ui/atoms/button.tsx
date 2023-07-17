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
  | "error"
  | "accent";
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
  // Outline 反転表示
  // Simple 初期表示は文字のみ、hoverで背景色が表示される
  // Underline hoverで下線が表示される
  Base,
  Basic: (props: Props & Ui) => {
    const { color = "secondary", rounded = "full", size = "md" } = props;
    return (
      <Base
        className={clsx(
          "text-center text-base font-bold",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-primary-500 text-primary-50 hover:bg-primary-600",
          color === "secondary" &&
            "bg-secondary-500 text-secondary-50 hover:bg-secondary-600",
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
