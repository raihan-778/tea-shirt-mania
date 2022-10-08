import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>This is grandpa</h2>
      <section>
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
