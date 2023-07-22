import { Rounded, Color, Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

// ロジックは基底のButtonに集約する
const Base = ({ children, className }: Props) => {
  return <div className={clsx(className)}>{children}</div>;
};

// 基底のButtonに対して、UIのバリエーションを追加する。主に機能だけ使い回ししたい場合にバリエーションをb追加する
const Container = {
  Base,
  Basic: (
    props: Props & {
      color?: Color;
    }
  ) => {
    const { color = "secondary" } = props;
    return (
      <Base
        {...props}
        className={clsx(
          "container",
          color === "primary" &&
            "bg-primary-50 text-primary-950 hover:bg-primary-100",
          color === "secondary" &&
            "bg-secondary-50 text-secondary-950 hover:bg-secondary-100",
          props.className
        )}
      />
    );
  },
  Floating: (
    props: Props & {
      position?: "bottom" | "top";
      color?: Color;
    }
  ) => {
    const { color = "secondary", position } = props;
    return (
      <Base
        {...props}
        className={clsx(
          "fixed mx-auto drop-shadow-lg",
          position === "top" && "top-0",
          position === "bottom" && "bottom-0",
          color === "primary" &&
            "bg-primary-50 text-primary-950 hover:bg-primary-100",
          color === "secondary" &&
            "bg-secondary-50 text-secondary-950 hover:bg-secondary-100",
          props.className
        )}
      />
    );
  },
};

export { Container };
