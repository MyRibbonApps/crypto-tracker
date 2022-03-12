import "./Button.scss";
const Button = ({ text, primary, propFunc = null }) => {
  return (
    <>
      <a
        onClick={() => (propFunc ? propFunc() : null)}
        className={`button${primary ? " button--primary" : " button--white"}`}
      >
        {text}
      </a>
    </>
  );
};

export default Button;
