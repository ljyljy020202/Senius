import React, { useContext, useState } from "react";
import "./styles/MyInfo.css";
import { useNavigate } from "react-router-dom";
import ImageSVG from "./ImageSVG"; // ImageSVG 컴포넌트를 import

import { ReactComponent as Image12 } from "./assets/image 12.svg";
import { ReactComponent as IconHand } from "./assets/free-icon-dollar-828515 1.svg";
import { ReactComponent as IconProduct } from "./assets/free-icon-product-management-8922081.svg";
import { ReactComponent as IconExit } from "./assets/free-icon-exit-13705466 1.svg";

import HeaderBasic from "./HeaderBasic";
import BottomBar from "./BottomBar";
import { UserContext } from "./UserContext"; // UserContext import
import { PointsContext } from "./PointsContext"; // PointsContext import

function MyInfo() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext); // UserContext에서 userInfo 가져오기
  const [data, setData] = useState(null); // 데이터를 저장할 상태

  const { setPoints } = useContext(PointsContext); // PointsContext에서 setPoints 가져오기

  const handleCheckpointClick = async () => {
    const id = "7chabin@naver.com";
    try {
      const response = await fetch(
        `/api/v1/memberpoint/history?id=${id}`
      ); // id를 쿼리 파라미터로 추가
      const result = await response.json();
      console.log(result);
      setData(result);
      setPoints(result.userpoint); // 포인트 업데이트

      navigate("/checkpoint", { state: { data: result } }); // checkpoint 페이지로 데이터와 함께 이동
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCheckBuyClick = async () => {
    const id = "7chabin@naver.com";
    try {
      const response = await fetch(
        `/api/v1/member/purchase?id=${id}`
      );
      const result = await response.json();
      console.log(result);
      setData(result);
      navigate("/checkbuy", { state: { data: result } }); // CheckBuy 페이지로 데이터와 함께 이동
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <HeaderBasic />
      <div className="screen">
        <div
          className="frame"
          style={{ marginTop: "9px" }}
          onClick={() => navigate("/myinfoexit")}
        >
          <div className="image-wrapper">
            <ImageSVG className="user-image" />{" "}
            {/* Ellipse 대신 ImageSVG 사용 */}
          </div>
          <div className="text-wrapper">
            <div className="text-item">
              {userInfo ? userInfo.name : "사용자 이름"}
            </div>{" "}
            {/* userInfo가 존재할 때만 name 사용 */}
            <div className="text-item">내 정보</div>
          </div>
          <Image12 className="image12" /> {/* 클래스 추가 */}
        </div>
        <div
          className="frame"
          style={{ marginTop: "17px" }}
          onClick={handleCheckpointClick} // onClick 핸들러 수정
        >
          <div className="image-wrapper">
            <div className="image-inner-wrapper">
              <IconHand className="inner-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="text">포인트 내역 확인하기</div>
          </div>
          <Image12 className="image12" /> {/* 클래스 추가 */}
        </div>
        <div
          className="frame"
          style={{ marginTop: "17px" }}
          onClick={handleCheckBuyClick} // onClick 핸들러 추가
        >
          <div className="image-wrapper">
            <div className="image-inner-wrapper">
              <IconProduct className="inner-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="text">구매한 상품 확인하기</div>
          </div>
          <Image12 className="image12" /> {/* 클래스 추가 */}
        </div>
        <div
          className="frame"
          style={{ marginTop: "17px" }}
          onClick={() => navigate("/myinfoexit")}
        >
          <div className="image-wrapper">
            <div className="image-inner-wrapper">
              <IconExit className="inner-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="text">로그아웃하기</div>
          </div>
          <Image12 className="image12" /> {/* 클래스 추가 */}
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default MyInfo;
