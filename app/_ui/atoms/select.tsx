import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  value?: readonly string[] | undefined | number | string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

const Base = ({ children, className, onChange, placeholder, value }: Props) => {
  return (
    <select
      className={clsx(className)}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
  );
};

const Option = ({
  children,
  value,
}: {
  value?: readonly string[] | undefined | number | string;
  children?: React.ReactNode;
}) => {
  return <option value={value}>{children}</option>;
};

const Select = {
  Base,
  Transparent: (props: Props & { size?: Size }) => {
    const { size = "sm" } = props;
    return (
      <div className="relative w-min">
        <Base
          {...props}
          className={clsx(
            "block w-min appearance-none bg-transparent px-2",
            size === "sm" && "pr-4 text-sm",
            size === "xl" && "pr-6 text-xl",
            size === "5xl" && "pr-9 text-5xl",
            props.className
          )}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-full">
          <ChevronUpDownIcon className="h-full text-gray-200" />
        </div>
      </div>
    );
  },
};

export { Select, Option };
