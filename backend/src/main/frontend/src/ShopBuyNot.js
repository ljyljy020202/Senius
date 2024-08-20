import React from "react";
import "./styles/ShopBuyNot.css";
import HeaderShop from "./HeaderShop";
import BottomBar from "./BottomBar";
import { useParams } from "react-router-dom";
import { products } from "./component/ProductList";

function ShopBuyNot() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <>
      <div className="top-container">
        <HeaderShop />
        <div className="point-container">
          <div className="point-text">보유 포인트:3500P</div>
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
          <div className="shopbuynot-box">
            <div className="shopbuynot-container" style={{ marginTop: "38px" }}>
              <div className="shopbuynot-message">잔여 포인트 부족</div>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default ShopBuyNot;
