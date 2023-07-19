import React from "react";
import clsx from "clsx";
import { Rounded, Color, Size } from "$/_ui";

export interface Props {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
}

const Base = ({ className, onChange, placeholder, value }: Props) => {
  return (
    <input
      className={clsx(className)}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

const Input = {
  Base,
  Basic: (
    props: Props & {
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
          "text-base focus:outline outline-offset-4 outline-2",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-primary-100 text-primary-900 hover:bg-primary-200 outline-primary-400 placeholder-primary-400",
          color === "secondary" &&
            "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 outline-secondary-500 placeholder-secondary-400",
          color === "accent" &&
            "bg-accent-100 text-accent-950 hover:bg-accent-200 outline-accent-400 placeholder-accent-400",
          size === "md" && "h-16 w-full px-8",
          props.className
        )}
      />
    );
  },
};

export { Input };
