import React from "react";

import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Kaka from "../Kaka/Kaka";
import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <section className="flex">
        <Father></Father>
        <Aunty></Aunty>
        <Kaka></Kaka>
      </section>
    </div>
  );
};

export default Grandpa;
