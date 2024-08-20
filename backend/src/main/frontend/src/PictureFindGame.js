import React, { useEffect, useState } from "react"; // useEffect를 import합니다.
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Modal from "react-modal";
import axios from "axios"; // axios를 import합니다.
import "./styles/PictureFindGame.css";
import Img1 from "./assets/image 1701.png";
import Img2 from "./assets/image 1702.png";
import Img3 from "./assets/image 1703.png";
import Img4 from "./assets/image 1704.png";
import Img5 from "./assets/image 1705.png";
import Img6 from "./assets/image 1706.png";
import Img7 from "./assets/image 1707.png";
import Img8 from "./assets/image 1708.png";
import Img9 from "./assets/image 1709.png";
import Img10 from "./assets/image 1710.png";
import Img11 from "./assets/image 1711.png";
import Img12 from "./assets/image 1712.png";
import CogImproveMain from "./CogImproveMain";

import { PointsContext } from "./PointsContext"; // PointsContext import

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
];

function PictureFindGame() {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  const { points } = useContext(PointsContext); // PointsContext에서 points 가져오기

  const [gamepoints, setPoints] = useState(points);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    if (image === mainImage) {
      setPoints(gamepoints + 500);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNavigate = () => {
    navigate("/cogimprovemain");
  };

  const handleRetry = () => {
    setMainImage(images[Math.floor(Math.random() * images.length)]);
    setModalIsOpen(false);
  };

  // Success Modal이 열릴 때 post 요청을 보내는 useEffect 추가
  useEffect(() => {
    if (modalIsOpen && isCorrect) {
      axios
        .post("/api/v1/memberpoint/addpoint", {
          // 요청에 필요한 데이터
          id: "7chabin@naver.com", //이 부분을 로그인할 때 가져와야 함
          content: "글자게임",
          point: 500,
        })
        .then((response) => {
          console.log("Post 요청 성공:", response.data);
        })
        .catch((error) => {
          console.error("Post 요청 실패:", error);
        });
    }
  }, [modalIsOpen, isCorrect]); // modalIsOpen과 isCorrect가 변경될 때마다 실행

  return (
    <div className="game-container">
      <div className="game-header">
        <div className="game-header-title">그림 찾기</div>
        <div className="header-description">보기와 같은 그림을 터치하세요!</div>
      </div>
      <div className="game-screen-zone">
        <div className="main-picture">
          <img src={mainImage} alt="main" />
        </div>
        <div className="option-button">
          <div className="button-text">보기</div>
        </div>
        <div className="gmaeimages">
          <div className="gameimages">
            {images.map((image, index) => (
              <img
                key={index}
                className="gameimage"
                src={image}
                alt={`option ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Success Modal */}
        <Modal
          isOpen={modalIsOpen && isCorrect}
          onRequestClose={closeModal}
          contentLabel="Success Modal"
          className="custom-modal success-modal"
          overlayClassName="custom-overlay"
        >
          <div className="modal-content">
            <div className="modal-header success-header">
              <div className="modal-title">문제 해결 성공!</div>
            </div>
            <div className="modal-body">
              <div className="modal-message">
                <div className="modal-message-time">
                  <p>
                    몇분 몇초만에
                    <br />
                    클리어!
                  </p>
                </div>
              </div>
            </div>

            <div className="point-box">
              <div className="gradient-background">
                <div className="text-box">+500P</div>
              </div>
            </div>

            <div className="footer-box">
              <div className="modal-footer">
                <div onClick={handleNavigate} className="start-screen-button">
                  시작화면
                </div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Failure Modal */}
        <Modal
          isOpen={modalIsOpen && !isCorrect}
          onRequestClose={closeModal}
          contentLabel="Failure Modal"
          className="custom-modal failure-modal"
          overlayClassName="custom-overlay"
        >
          <div className="modal-content">
            <div className="modal-header failure-header">
              <div className="modal-title">문제 해결 실패</div>
            </div>
            <div className="modal-body">
              <div className="modal-message">
                <p className="modal-message-text">
                  실패한 간단한 이유
                  <br />
                  (혹은 정답)설명
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="button-container">
                <div className="button retry-button">
                  <div className="button-text" onClick={handleRetry}>
                    다시하기
                  </div>
                </div>
                <div className="button start-screen-button">
                  <div className="button-text" onClick={handleNavigate}>
                    시작화면
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default PictureFindGame;
