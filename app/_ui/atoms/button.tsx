import React from "react";
import clsx from "clsx";

export type Rounded = "full" | "none";

export interface Ui {
  spacing?: "none" | "lg" | "md" | "sm" | "xs";
  font?: "normal" | "bold";
  rounded?: Rounded;
}

export type UiProps<T extends string | number | symbol> = {
  [key in T]: React.FC<Props & Ui>;
};

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

// ロジックは基底のButtonに集約する
const Base: React.FC<Props> = ({ children, className, onClick }: Props) => {
  return (
    <button className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
};

// それぞれのボタンの見た目は、基底のButtonに対して、バリエーションを追加する
// バリエーションは、デザインの指定があればそのバリエーション毎に追加する。名称も合わせた方が良い。
const Button: UiProps<"Primary" | "Base"> = {
  Base,
  Primary: (props) => {
    return (
      <Base
        className={clsx(
          "bg-indigo-500 text-center text-base font-bold",
          props.rounded === "full" && "rounded-full",
          props.className
        )}
        {...props}
      />
    );
  },
};

// それぞれのボタンの見た目は、基底のButtonに対して、バリエーションを追加する
export { Button };
