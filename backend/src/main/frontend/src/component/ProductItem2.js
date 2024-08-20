import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductItem2.css";

const ProductItem2 = ({ product }) => {
  const currentPoints = 3500; // 현재 포인트 (예시)
  const remainingPoints = currentPoints - product.points;

  return (
    <div className="ProductItem">
      <div className="ProductHeader">{product.name}</div>
      <img className="ProductImage" src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>가격: {product.points}P</p>
      <div className="ProductDetails">
        <p>
          현재 포인트 <span>{currentPoints}P</span>
        </p>
        <p>
          기프티콘(CU) <span>{product.points}P</span>
        </p>
        <p>
          남는 포인트 <span>{remainingPoints}P</span>
        </p>
      </div>
      <p>정말로 구매하시겠습니까?</p>
    </div>
  );
};

export default ProductItem2;
