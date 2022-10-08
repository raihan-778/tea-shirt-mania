import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";
import Special from "../Special/Special";

const Myself = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>Myself</h2>
      <p>House: {house}</p>
      <button onClick={() => setHouse(house - 1)}>Decrease</button>
      <section>
        <Special></Special>
      </section>
    </div>
  );
};

export default Myself;
