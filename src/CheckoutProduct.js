import React from "react";
import { useStateValue } from "./Components/StateProvider";
import { total } from "./Components/Reducer";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };

  return (
    <div className="d-flex mb-3">
      <div style={{ width: "160px" }}>
        <img src={image} alt="pc" className="w-100"></img>
      </div>
      <div className="ms-4">
        <h4>{title}</h4>
        <span>
          $<strong>{price}</strong>
        </span>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </p>
        <button
          className=" btn btn-sm  btn-warning rounded-0"
          onClick={RemoveFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
