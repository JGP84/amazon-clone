import React from "react";
import "./Home.css";
import Product from "../components/Product.js";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        className="home__image"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="0001"
          title="AmazonBasics Book Safe, Key Lock, Small, Blue"
          price={13.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/91E1LbRmTYL._AC_UL320_.jpg"
        />
        <Product
          id="0002"
          title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
          price={21.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0003"
          title="AmazonBasics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Twin, Dino Friends"
          price={35.29}
          rating={4}
          image="https://m.media-amazon.com/images/I/91qQYFih2KL._AC_UL320_.jpg"
        />
        <Product
          id="0004"
          title="AmazonBasics Controller Charging Station for PlayStation 4 DualShock 4 Controllers - 4 Foot Cable, Black"
          price={18.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81dS49Qdn8L._AC_UL320_.jpg"
        />
        <Product
          id="0005"
          title="AmazonBasics Portable Wireless, 2.1 Bluetooth Speaker, Black"
          price={28.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71VlL2uonUL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="0006"
          title="AmazonBasics Blue, White, and Yellow Microfiber Cleaning Cloth - Pack of 24"
          price={15.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81wUWVAiWDL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="0007"
          title="AmazonBasics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon "
          price={42.41}
          rating={5}
          image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
