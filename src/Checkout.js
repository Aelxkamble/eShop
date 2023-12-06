import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Components/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="container-fluid">
      <div className="row mt-2 min-vh-100">
        <div className="col-9">
          <img
            src="https://images.ctfassets.net/7st9xm42xppc/2Q0uFQzXSkfDf6X1whYMSo/ce150fd797334208656ea1b51120ba56/142-min.png"
            className="w-100"
            style={{ height: "200px" }}
            alt="amazonads"
          ></img>
          <div className="mt-2">
            <h3>Your Shopping Cart</h3>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="col-3">
          <Subtotal></Subtotal>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
