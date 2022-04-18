import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  const { children, className, onClick, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={clsx(
        "w-12 h-12 rounded-sm text-2xl bg-white shadow-lg",
        "disabled:shadow-none disabled:text-gray-400",
        className
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
