import logo from "../assets/logo.png";
import cartIcon from "../assets/cart_icon.png";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Brand Logo" />
          <p>ShopEase</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            Men
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            Women
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cartIcon} alt="Cart Image" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;