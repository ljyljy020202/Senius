import React from "react";
import "../styles/Header.css";
import Logo from "../assets/시니어스쇼핑몰.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="로고" className="logo" />
      <div className="header-text">시니어스</div>
    </header>
  );
};

export default Header;
