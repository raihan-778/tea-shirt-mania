import React, { createContext, useState } from "react";

import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Kaka from "../Kaka/Kaka";
import "./Grandpa.css";

export const RingContext = createContext("ring");
export const MoneyContext = createContext(555);

const Grandpa = () => {
  const [Money, setMoney] = useState(555);
  const [house, setHouse] = useState(7);

  const ring = "Dadir Ring";

  return (
    <RingContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[Money, setMoney]}>
        <div className="grandpa">
          <section className="flex">
            <Father ring={ring} house={house}></Father>
            <Aunty house={house}></Aunty>
            <Kaka house={house}></Kaka>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
