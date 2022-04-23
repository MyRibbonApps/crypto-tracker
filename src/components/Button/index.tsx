import { FC } from "react";
import "./Button.scss";

type Props = {
  text: string;
  primary: boolean;
  transparent?: boolean;
  propFunc?: () => void | null;
};
const Button: FC<Props> = ({
  text,
  primary,
  transparent = true,
  propFunc = null,
}) => {
  return (
    <>
      <a
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
      </a>
    </>
  );
};

export default Button;
