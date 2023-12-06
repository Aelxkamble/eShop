import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();

  function addProduct() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  }
  return (
    <div className="d-flex flex-column p-2">
      <h2>{title}</h2>
      <strong>${price}</strong>
      <p>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span>⭐</span>
          ))}
      </p>
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://m.media-amazon.com/images/I/61aULW8uYgL._AC_UF1000,1000_QL80_.jpg"
          alt="pc"
          className="w-50 mt-1"
          style={{ height: "200px" }}
        ></img>
        <button onClick={addProduct} className="btn btn-warning w-auto">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Product;
