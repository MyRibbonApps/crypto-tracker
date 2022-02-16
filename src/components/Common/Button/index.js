import "./Button.scss";
const Button = ({ text, primary }) => {
  return (
    <>
      <a className={`button${primary ? " button--primary" : " button--white"}`}>
        {text}
      </a>
    </>
  );
};

export default Button;
