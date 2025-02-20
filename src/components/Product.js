import React from "react";
import "./Product.css";

import { useStateValue } from "../StateProvider.js";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {" "}
          {/* Creating an array of size $rating */}
          {/*  {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))} */}
          {/* Array constructor, Array(rating) creates an empty array with a length property of rating... */}
          {Array(rating).fill(<p>⭐</p>)}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
