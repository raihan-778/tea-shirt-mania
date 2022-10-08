import React, { createContext, useContext, useState } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Cousin = ({ house }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>House: {house}</p>
      <p>Ring: {ring}</p>
    </div>
  );
};

export default Cousin;
