import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tShirt, handleAddToCart }) => {
  const { name, picture, price, gender } = tShirt;
  return (
    <div className="t-shirt">
      <div className="img">
        <img src={picture} alt="img" />
      </div>
      <h2>{name}</h2>
      <h4>Price: {price}</h4>
      <p>Gender: {gender}</p>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
