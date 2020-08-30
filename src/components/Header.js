import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider.js";
import { auth } from '../firebase.js';

function Header() {
    const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          {/* Not refresh  page */}
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="checkout" className="header__link">
          <div className="header__optionBasket">
            {/* basket Icon */}
            <ShoppingBasketIcon />
            {/* Number of Items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
