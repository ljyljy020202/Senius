// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { products } from "../src/component/ProductList";
// import "./styles/Productdetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((product) => product.id === parseInt(id));

//   if (!product) {
//     return <div>상품을 찾을 수 없습니다.</div>;
//   }

//   const handleBuyClick = () => {
//     navigate(`/shopreask/${product.id}`);
//   };

//   return (
//     <div className="Productdetail">
//       <div className="product-detail-container">

//         <div className="product-detail">
//           <h2 className="product-title">{product.name}</h2>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="product-image"
//           />
//           <p className="product-description">{product.description}</p>
//           <button className="gift-button">기프티콘(CU) {product.points}</button>
//           <br />
//           <button className="buy-button" onClick={handleBuyClick}>
//             구매하기
//           </button>
//           <p>{product.description}</p>
//           <p>가격: {product.points}P</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
