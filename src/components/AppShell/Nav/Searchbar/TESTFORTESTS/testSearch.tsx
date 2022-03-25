import { useEffect, useState } from "react";

const testSearch = () => {
  const [input, setInput] = useState("");
  const [valueTriggeredByUseEffect, setValueTriggeredByUseEffect] =
    useState("");
  useEffect(() => {
    (async () => {
      const get: any = await fetch("http://localhost:3001/searchCrypto", {
        method: "POST",
      });
      const toJsn = await get.json();
      setValueTriggeredByUseEffect(toJsn.message);
      //   setValueTriggeredByUseEffect("Hey");
    })();
  }, [input]);
  return (
    <div>
      <input
        data-testid="searchbarInputID"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <p data-testid="textID">{valueTriggeredByUseEffect}</p>
    </div>
  );
};

export default testSearch;
