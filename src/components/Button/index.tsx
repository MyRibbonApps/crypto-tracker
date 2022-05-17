import { FC } from "react";
import "./Button.scss";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  theme: "primary" | "light" | "dark";
  mode: "filled" | "outline";
};
const Button = ({ children, theme, mode, ...props }: ButtonProps) => {
  return (
    <>
      <button {...props} className={`button button-${mode}-${theme}`}>
        {children}
      </button>
      {/* <a
        onClick={() => (propFunc ? propFunc() : null)}
        className={`button${
          primary
            ? " button--primary"
            : transparent
            ? " button--transparent"
            : " button--white"
        }`}
      >
        {text}
      </a> */}
    </>
  );
};

export default Button;
