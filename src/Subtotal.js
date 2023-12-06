import React from "react";
import { useStateValue } from "./Components/StateProvider";
import { total } from "./Components/Reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="bg-light p-4">
      <p>
        Subtotal ({basket.length} items):<strong>${total(basket)}</strong>
      </p>
      <input type="checkbox" />
      This order contains a gift
      <button className="btn btn-warning rounded-0 w-100 mt-2">
        Procced to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
