import React from "react";
import "./styles/Barcode.css";
import { useParams } from "react-router-dom";
import Im1 from "./assets/바코드1.png";
import Im2 from "./assets/바코드2.png";
import Im3 from "./assets/바코드3.png";
import Im4 from "./assets/바코드4.png";
import Im5 from "./assets/바코드5.png";
import Im6 from "./assets/바코드6.png";
import ShareButton from "./assets/공유하기버튼.png";
import BottomBar from "./BottomBar";
import { ReactComponent as Share } from "./assets/share.svg";

const barcodeImages = {
  1: Im1,
  2: Im2,
  3: Im3,
  4: Im4,
  5: Im5,
  6: Im6,
};

function Barcode() {
  const { id } = useParams();
  const handleShare = () => {
    alert("성공적으로 공유되었습니다!");
  };

  const productImage = barcodeImages[id];

  return (
    <>
      <div className="barcode-screen">
        {/* <GiftItemImg /> */}
        <div className="purchase-info" style={{ paddingTop: "49px" }}>
          <div className="purchase-text">
            구매한 상품은 내 정보-&gt;구매내역
            <br />
            에서도 확인 가능합니다
          </div>
        </div>

        <div className="product-img-container" style={{ paddingTop: "23px" }}>
          <img src={productImage} alt="상품 바코드" className="product-img" />
        </div>

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

export default Barcode;
