import React from "react";
import Cousin from "../Cousin/Cousin";

const Kaka = ({ house }) => {
  return (
    <div>
      <h2>Kaka</h2>
      <section className="flex">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Kaka;
