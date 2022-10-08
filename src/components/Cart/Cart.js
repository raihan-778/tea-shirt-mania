import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h3 className={cart.length === 0 ? "order" : "cyan"}>Order Summery</h3>
      <h5 className={cart.length === 0 || "bold"}>
        Order Quantity: {cart.length}
      </h5>
      {cart.map((tshirt) => (
        <div>
          <p>
            {tshirt.name}
            {
              <button key={tshirt._id} onClick={() => handleRemoveItem(tshirt)}>
                X
              </button>
            }
          </p>
        </div>
      ))}
      {cart.length >= 5 ? (
        <h2 className="cart-greeting">
          We are very Glad to have a customer like you
        </h2>
      ) : (
        "Thanks for coming to Our shop"
      )}
    </div>
  );
};

export default Cart;
