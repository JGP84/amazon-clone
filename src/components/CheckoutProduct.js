import React from 'react';
import { useStateValue } from "../StateProvider.js";
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
      <div className="checkoutProduct">
        <img src={image} className="checkoutProduct__image" alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating).fill(<p>⭐</p>)}
          </div>
          <button onClick={RemoveFromBasket}>Remove from cart</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
