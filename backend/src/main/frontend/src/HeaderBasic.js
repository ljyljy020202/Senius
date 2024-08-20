import React from "react";
import "./styles/HeaderBasic.css";
import { ReactComponent as Logo } from "./assets/image 1667.svg";

function HeaderBasic() {
  return (
    <div className="basic-header-container">
      <div className="basic-header-content">
        <Logo className="basic-header-logo" />
        <div className="basic-header-title">시니어스</div>
      </div>
    </div>
  );
}

export default HeaderBasic;
