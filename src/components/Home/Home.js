import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  let message;
  if (cart.length === 4) {
    message = "Wow you have added 4 items in cart";
  }
  cart.length === 0
    ? (message = "please buy something")
    : (message = "Thanks for buy");

  const handleAddToCart = (tshirt) => {
    console.log(tshirt);
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("This Shirt is already added");
    } else {
      const newCart = [...cart, tshirt];
      console.log(newCart);
      setCart(newCart);
    }
  };

  const handleRemoveItem = (tshirt) => {
    console.log(tshirt);
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    console.log(remaining);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tShirt) => (
          <Tshirt
            handleAddToCart={handleAddToCart}
            key={tShirt._id}
            tShirt={tShirt}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
        {message}
      </div>
    </div>
  );
};

export default Home;
