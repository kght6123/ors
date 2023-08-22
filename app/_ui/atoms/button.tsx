import { Rounded, Color, Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: undefined | "submit" | "button" | "reset";
  value?: readonly string[] | number | string;
  children?: React.ReactNode;
  className?: string;
  form?: string;
}

// ロジックは基底のButtonに集約する、コピーして新しくコンポーネントを作る時もUIのバリエーション側でエラーが出づらい
const Base = ({
  children,
  className,
  form,
  onClick,
  onSubmit,
  type = "button",
  value,
}: Props) => {
  return (
    <button
      className={clsx(className)}
      onSubmit={onSubmit}
      onClick={onClick}
      value={value}
      form={form}
      type={type}
    >
      {children}
    </button>
  );
};

// 基底のButtonに対して、UIのバリエーションを追加する。主に機能だけ使い回ししたい場合にバリエーションをb追加する
const Button = {
  Back: (props: Props) => {
    return (
      <Base
        {...props}
        className={clsx(
          "flex h-8 w-8 content-center items-center justify-center rounded-full border border-slate-300 text-center text-base font-bold outline-2 outline-offset-4 outline-slate-400 transition-transform delay-0 duration-75 ease-out focus:outline active:scale-95 active:outline",
          props.className
        )}
      />
    );
  },
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
          "text-center text-base font-bold outline-2 outline-offset-4 transition-transform delay-0 duration-75 ease-out focus:outline active:scale-95 active:outline",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-primary-500 text-primary-50 outline-primary-400 hover:bg-primary-600",
          color === "secondary" &&
            "bg-secondary-500 text-secondary-50 outline-secondary-500 hover:bg-secondary-600",
          size === "md" && "h-16 w-full",
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
