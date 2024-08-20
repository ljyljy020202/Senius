import React from "react";
import "./styles/ShopBuy.css";
import { products } from "../src/component/ProductList";
import { Link } from "react-router-dom";

function ShopBuy() {
  return (
    <div className="ShopBuy">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2 className="product-title">{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-description">{product.description}</p>
          <button className="gift-button">기프티콘(CU) {product.price}</button>
          <br></br>
          <Link to={`/product/${product.id}`}>
            <button className="buy-button">구매하기</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ShopBuy;
