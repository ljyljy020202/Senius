import React, {useContext} from "react";
import { useState } from "react";
import "./styles/MyInfoExit.css";
import HeaderBasic from "./HeaderBasic";
import BottomBar from "./BottomBar";
import { ReactComponent as Unfollow } from "./assets/free-icon-unfollow-16973756.svg";
import { ReactComponent as Image12 } from "./assets/image 12.svg";
import {UserContext} from "./UserContext";
import ImageSVG from "./ImageSVG";
import axios from "axios";

function MyInfoExit() {
  const { userInfo } = useContext(UserContext); // UserContext에서 userInfo 가져오기
  const [isConfirmExitVisible, setConfirmExitVisible] = useState(false);
  const handleDeleteAccountClick = () => {
    setConfirmExitVisible(true);
  };

  const handleCancelExit = () => {
    setConfirmExitVisible(false);
  };
  const handleConfirmExit = async () => {
    const userId = userInfo.id;
    try {
      const response = await axios.delete(`/api/v1/member/withdraw`, {
        params: {id: userId}
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }


  }


  return (
    <>
      <HeaderBasic />
      <div className="screen">
        <div className="user-info">
          <div className="user-info-img">
            <ImageSVG className="user-image"/> {/* Ellipse 대신 ImageSVG 사용 */}
          </div>
          <div className="user-info-text">
            <div>{userInfo ? userInfo.name : '사용자 이름'}</div>
            <div>{userInfo ? userInfo.age : '나이'}</div>
          </div>
        </div>

        <div className="user-contact">
          <div>전화번호 : {userInfo ? userInfo.phone : '전화번호'}</div>
        </div>

        <div className="user-id">
          <div>아이디 : {userInfo ? userInfo.id : '아이디'}</div>
        </div>

        <div className="delete-account" onClick={handleDeleteAccountClick}>
          <div className="delete-account-img">
            <Unfollow />
          </div>
          <div className="delete-account-text">회원 탈퇴하기</div>
          <Image12 className="arrow-icon" />
        </div>

        <div
          className={`confirm-exit ${isConfirmExitVisible ? "visible" : ""}`}
        >
          <div className="confirm-exit-text">
            정말 탈퇴하시겠습니까?
            <br />
            모든 포인트가 사라지며, 복구는 불가능합니다
          </div>
          <div className="confirm-exit-option">
            <div className="confirm-exit-btn" onClick={handleConfirmExit}>탈퇴하기</div>
            <div className="confirm-exit-btn" onClick={handleCancelExit}>
              취소하기
            </div>
          </div>
        </div>
      </div>
      <BottomBar /> {/* BottomBar를 Router 내에 포함 */}
    </>
  );
}

export default MyInfoExit;
