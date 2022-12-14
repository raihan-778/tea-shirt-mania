import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const [Money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>House: {house}</p>
      <p>Money: {Money}</p>
    </div>
  );
};

export default Sister;
