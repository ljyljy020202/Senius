import React from "react";
import "./styles/GiftItem.css";

function GiftItem({ item, imgpath, onClick }) {
  return (
    <div className="gift-item-container" onClick={onClick}>
      <div className="gift-item">
        <img className="gift-image" src={imgpath} alt="Gift" />

        <div className="gift-description">
          <div className="gift-title">{item}</div>
          <div className="gift-details">
            비타민C 500mg(1일 영양성분 기준치의...
          </div>
        </div>
      </div>

      <div className="gift-label">
        <div className="gift-label-text">기프티콘</div>
      </div>
    </div>
  );
}

export default GiftItem;
