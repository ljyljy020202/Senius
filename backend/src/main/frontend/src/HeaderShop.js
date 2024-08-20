import React from "react";
import "./styles/HeaderShop.css";
import { ReactComponent as Logo } from "./assets/image 1667.svg";

function HeaderShop() {
  return (
    <div className="shop-header-container">
      <div className="shop-header-content">
        <Logo className="shop-header-image" alt="Placeholder" />
        <div className="shop-header-title">시니어스 쇼핑몰</div>
      </div>
    </div>
  );
}

export default HeaderShop;
