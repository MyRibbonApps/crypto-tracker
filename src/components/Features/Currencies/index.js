import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const Currencies = () => {
  const params = useParams();
  const paramID = params.currencyID;

  const navigate = useNavigate();

  useEffect(() => {
    if (!paramID) {
      navigate("/");
    }
    console.log(paramID);
  }, []);
  return (
    <div>
      <h1>Currencies</h1>
    </div>
  );
};

export default Currencies;
