import React, { useContext } from "react";
import "./styles/ShopReask.css";
import { products } from "./component/ProductList";
import { useParams, useNavigate } from "react-router-dom";
import ProductItem from "./component/ProductItem";
import HeaderShop from "./HeaderShop";
import BottomBar from "./BottomBar";
import { PointsContext } from "./PointsContext";
import axios from "axios";

function ShopReask() {
  const { points } = useContext(PointsContext); // 'points'로 가져오기

  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));
  const currentPoints = points; // 현재 포인트
  const remainingPoints = currentPoints - product.points;

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  const handleBuyClick = () => {
    if (remainingPoints < 0) {
      navigate(`/shopbuynot/${product.id}`); // 포인트가 부족하면 모달을 엽니다.
    } else {
      axios
          .post("/api/v1/memberpoint/payment", {
            // 요청에 필요한 데이터
            id: "7chabin@naver.com", //이 부분을 로그인할 때 가져와야 함
            item: `${product.name}`,
            point: `${product.points}`,
          })
          .then((response) => {
            console.log("Post 요청 성공:", response.data);
          })
          .catch((error) => {
            console.error("Post 요청 실패:", error);
          });
      navigate(`/barcode/${product.id}`);
    }
  };

  return (
      <>
        <div className="top-container">
          <HeaderShop />
          <div className="point-container">
            <div className="point-text">보유 포인트: {currentPoints}</div>
          </div>
        </div>

        <div className="screen">
          <div className="ProductItem">
            <div className="product-card-box">
              <div className="product-card-container">
                <div className="product-card-text">{product.name}</div>
              </div>
            </div>

            <div className="product-img-container">
              <img
                  className="product-styled-image"
                  src={product.image}
                  alt={product.name}
              />
            </div>

            <div className="gift-icon-box" style={{ paddingTop: "51.73px" }}>
              <div className="gift-label">
                <span className="gift-label-text">현재 포인트</span>
                <span className="gift-points">{currentPoints}</span>
              </div>
            </div>

            <div className="gift-icon-box">
              <div className="gift-label">
                <span className="gift-label-text">기프티콘(CU)</span>
                <span className="gift-points">{product.points}</span>
              </div>
            </div>

            <div className="gift-icon-box">
              <div className="green-gift-label">
                <span className="gift-label-text">남는 포인트</span>
                <span className="gift-points">{remainingPoints}</span>
              </div>
            </div>

            <div className="confirmation-dialog" style={{ paddingTop: "43px" }}>
              <div className="confirmation-text">정말로 구매하시겠습니까?</div>
            </div>

            <div className="product-button-box" style={{ paddingTop: "0px" }}>
              <div className="product-button-container" onClick={handleBuyClick}>
                <div className="product-button-text">구매하기</div>
              </div>
            </div>
          </div>
        </div>
        <BottomBar />
      </>
  );
}

export default ShopReask;
