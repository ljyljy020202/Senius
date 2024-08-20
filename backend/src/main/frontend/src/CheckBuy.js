import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/CheckBuy.css";
import HeaderBasic from "./HeaderBasic";
import GiftItem from "./GiftItem";
import BottomBar from "./BottomBar";
import { UserPurchaseContext } from "./UserPurchaseContext";
function CheckBuy() {
  const navigate = useNavigate();

  // const location = useLocation();
  // const data = location.state?.data; // 데이터가 존재하는지 확인
  // console.log("location.state.data:", data); // 데이터 구조를 확인

  const { purchases } = useContext(UserPurchaseContext); // UserPurchaseContext에서 purchases 가져오기

  return (
    <>
      <HeaderBasic />
      <div className="screen">
        <div className="buy-history-title">
          <div className="buy-history-container">
            <div className="buy-history-text">구매 내역</div>
          </div>
        </div>
        {purchases.map((purchase, index) => (
          <GiftItem
            key={index}
            item={purchase.item}
            imgpath={purchase.imgpath}
            onClick={() => navigate(`/checkbuy/detail/${index}`)} // 디테일 페이지로 이동
          />
        ))}
      </div>
      <BottomBar />
    </>
  );
}

export default CheckBuy;
