import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Assets From Grand pa: {ring}</p>
    </div>
  );
};

export default Brother;
