import { Rounded, Color, Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  value?: readonly string[] | undefined | number | string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
  children?: React.ReactNode;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  pattern?: string;
  title?: string;
  name?: string;
}

const Base = ({
  autoFocus,
  className,
  name,
  onChange,
  pattern,
  placeholder,
  required,
  title,
  type,
  value,
}: Props) => {
  return (
    <input
      className={clsx(className)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={onChange}
      required={required}
      pattern={pattern}
      title={title}
      value={value}
      name={name}
      type={type}
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
          "text-base outline-2 outline-offset-4 focus:outline",
          rounded === "full" && "rounded-full",
          color === "primary" &&
            "bg-primary-100 text-primary-900 outline-primary-400 placeholder:text-primary-400 hover:bg-primary-200",
          color === "secondary" &&
            "bg-secondary-100 text-secondary-700 outline-secondary-500 placeholder:text-secondary-400 hover:bg-secondary-200",
          color === "accent" &&
            "bg-accent-100 text-accent-950 outline-accent-400 placeholder:text-accent-400 hover:bg-accent-200",
          size === "md" && "h-16 w-full px-8",
          props.className
        )}
      />
    );
  },
};

export { Input };
