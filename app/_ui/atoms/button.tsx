import React from "react";
import clsx from "clsx";
import { Rounded, Color, Size } from "$/_ui";

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

// ロジックは基底のButtonに集約する
const Base = ({ children, className, onClick }: Props) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};

// 基底のButtonに対して、UIのバリエーションを追加する。主に機能だけ使い回ししたい場合にバリエーションをb追加する
const Button = {
  Base,
  Basic: (
    props: Props & {
      // 対応しているオプションのみ追加する
      rounded?: Rounded;
      color?: Color;
      size?: Size;
    }
  ) => {
    const { color = "secondary", rounded = "full", size = "md" } = props;
    return (
      <Base
        {...props}
        className={clsx(
          "text-center text-base font-bold transition-transform duration-50 ease-out delay-0 active:scale-95 focus:outline active:outline outline-offset-4 outline-2",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-primary-500 text-primary-50 hover:bg-primary-600 outline-primary-400",
          color === "secondary" &&
            "bg-secondary-500 text-secondary-50 hover:bg-secondary-600 outline-secondary-500",
          size === "md" && "h-16 w-full",
          props.className
        )}
      />
    );
  },
  Back: (props: Props) => {
    return (
      <Base
        {...props}
        className={clsx(
          "text-center text-base font-bold transition-transform duration-50 ease-out delay-0 active:scale-95 focus:outline active:outline outline-offset-4 outline-2 rounded-full border border-gray-300 w-8 h-8 outline-gray-400 flex items-center justify-center content-center",
          props.className
        )}
      />
    );
  },
  // バリエーション追加の例
  // - Outline 反転表示
  // - Simple 初期表示は文字のみ、背景色なし、hoverで背景色が表示される
  // - Underline 初期表示は文字のみ、背景色なし、hoverで下線が表示される
};

// それぞれのボタンの見た目は、基底のButtonに対して、バリエーションを追加する
export { Button };
