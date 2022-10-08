import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [Money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>{Money}</h2>
      <button onClick={() => setMoney(Money + 100)}>Increase</button>
    </div>
  );
};

export default Special;
