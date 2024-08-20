import React from "react";
import "./styles/CheckBuyDetail.css";
import GiftItemImg from "./GiftItemImg";
import BottomBar from "./BottomBar";
import { ReactComponent as Share } from "./assets/share.svg";

function CheckBuyDetail() {
  return (
    <>
      <div className="screen">
        <div className="styled-div-name">
          <div className="styled-div">
            <div className="styled-div-text">비타 500</div>
          </div>
        </div>
        <GiftItemImg />

        <div className="share-button">
          <div className="share-button-text">공유하기</div>
          <div className="share-button-icon">
            <Share className="share-button-image" />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default CheckBuyDetail;
