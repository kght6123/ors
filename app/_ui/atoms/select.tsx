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
  None: (props: Props & {}) => {
    const {} = props;
    return (
      <Base
        {...props}
        className={clsx(
          "appearance-none bg-gray-500 px-2 pr-6",
          props.className
        )}
      />
    );
  },
};

export { Select, Option };
