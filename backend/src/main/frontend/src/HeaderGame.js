import React from "react";
import "./styles/HeaderGame.css";
import { ReactComponent as Logo } from "./assets/image 1667.svg";

function HeaderGame() {
  return (
    <div className="header-container">
      <div className="header-content">
        <Logo
          className="logo"
          src="https://via.placeholder.com/46x43"
          alt="logo"
        />
        <div className="title">시니어스 - 인지 향상 게임</div>
      </div>
    </div>
  );
}

export default HeaderGame;
