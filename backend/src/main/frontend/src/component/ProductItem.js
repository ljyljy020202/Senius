import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../styles/ProductItem.css";
import HeaderShop from "../HeaderShop";
import BottomBar from "../BottomBar";
import { PointsContext } from "../PointsContext"; // PointsContext import

const ProductItem = ({ product, onClick }) => {
  const navigate = useNavigate();
  const handleBuyClick = () => {
    navigate(`/shopreask/${product.id}`);
  };

  const { points } = useContext(PointsContext); // 'points'로 가져오기
  const remainingPoints = points - product.points;

  return (
    <>
      <div className="top-container">
        <HeaderShop />
        <div className="point-container">
          <div className="point-text">보유 포인트:{points}P</div>
        </div>
      </div>

      <div className="screen">
        <div className="ProductItem">
          <div className="product-card-box">
            <div className="product-card-container">
              <div className="product-card-text"> {product.name}</div>
            </div>
          </div>

          <div className="product-img-container">
            <img
              className="product-styled-image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="text-content-box">
            <div className="text-content-container">
              <p className="text-content">{product.description}</p>
            </div>
          </div>

          <div className="gift-icon-box">
            <div className="gift-label">
              <span className="gift-label-text">기프티콘</span>
              <span className="gift-points">{product.points}</span>
            </div>
          </div>

          <div className="product-button-box">
            <div className="product-button-container">
              <div className="product-button-text" onClick={handleBuyClick}>
                구매하기
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default ProductItem;
