import "./Button.scss";
const Button = ({ text, primary, transparent = true, propFunc = null }) => {
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
