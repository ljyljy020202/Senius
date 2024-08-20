import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios를 import합니다.
import Modal from "react-modal";
import "../src/styles/WordGame.css";
import { PointsContext } from "./PointsContext"; // PointsContext import

const WordGame = () => {
  const { points } = useContext(PointsContext); // PointsContext에서 points 가져오기
  const [gamepoints, setPoints] = useState(points);

  const navigate = useNavigate();
  const wordSets = {
    set1: {
      words: [
        "개미",
        "가미",
        "개미",
        "기미",
        "거마",
        "가미",
        "거미",
        "계미",
        "개미",
        "가미",
        "거미",
        "기미",
        "거마",
        "가미",
        "거미",
        "계미",
      ],
      keyWord: "개미",
    },
    set2: {
      words: [
        "니비",
        "나비",
        "내비",
        "너비",
        "누비",
        "너비",
        "나바",
        "너배",
        "너비",
        "나배",
        "너브",
        "너비",
        "나비",
        "너버",
        "나버",
        "나배",
      ],
      keyWord: "나비",
    },
    set3: {
      words: [
        "도미",
        "도머",
        "도마",
        "도매",
        "도무",
        "도미",
        "도마",
        "도미",
        "도마",
        "도메",
        "도모",
        "도미",
        "도며",
        "도마",
        "도미",
        "도마",
      ],
      keyWord: "도마",
    },
    set4: {
      words: [
        "과자",
        "개자",
        "기자",
        "구자",
        "거자",
        "그자",
        "과자",
        "가자",
        "규자",
        "거자",
        "계자",
        "거자",
        "거자",
        "개자",
        "귀자",
        "가자",
      ],
      keyWord: "과자",
    },
    set5: {
      words: [
        "연도",
        "멸도",
        "명도",
        "전도",
        "건도",
        "변도",
        "면도",
        "영도",
        "역도",
        "면도",
        "연도",
        "정도",
        "면도",
        "병도",
        "던도",
        "면도",
      ],
      keyWord: "면도",
    },
    set6: {
      words: [
        "판다",
        "팡다",
        "팔다",
        "팦다",
        "팍다",
        "판다",
        "팍다",
        "팟다",
        "핀다",
        "필다",
        "팔다",
        "팟다",
        "팟다",
        "판다",
        "팜다",
        "팔다",
      ],
      keyWord: "판다",
    },
  };

  const [currentSet, setCurrentSet] = useState(wordSets.set1);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const randomizeSet = () => {
    const sets = Object.values(wordSets);
    const randomSet = sets[Math.floor(Math.random() * sets.length)];
    setCurrentSet(randomSet);
    setInputValue("");
    setMessage("");
  };

  const handleSubmit = () => {
    const correctCount = currentSet.words.filter(
        (word) => word === currentSet.keyWord
    ).length;
    if (parseInt(inputValue) === correctCount) {
      setIsCorrect(true);
      setPoints(gamepoints + 500);
      //setMessage("정답입니다! 300P 적립");
    } else {
      setIsCorrect(false);
      //setMessage("다시 시도해보세요.");
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleRetry = () => {
    randomizeSet();
    closeModal();
  };

  const handleNavigate = () => {
    navigate("/cogimprovemain");
  };

  // Success Modal이 열릴 때 post 요청을 보내는 useEffect 추가
  useEffect(() => {
    if (modalIsOpen && isCorrect) {
      axios
          .post("/api/v1/memberpoint/addpoint", {
            // 요청에 필요한 데이터
            id: "7chabin@naver.com", //이 부분을 로그인할 때 가져와야 함
            content: "단어 찾기",
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
      <div className="word-game-container">
        <div className="word-game-header">
          <div className="word-game-header-title">단어 찾기</div>
          <div className="word-header-description">
            단어가 몇개 숨어있는지 맞추세요!
          </div>
        </div>

        <div className="word-game">
          <div className="word-grid">
            {currentSet.words.map((word, index) => (
                <div key={index} className="word-cell">
                  {word}
                </div>
            ))}
          </div>
          <div className="input-section">
            <div className="input-row">
              <span className="word-cell">{currentSet.keyWord}</span>
              <div className="word-text-box" style={{ marginLeft: "9px" }}>
                는 총
              </div>
              <input
                  type="text"
                  className="input-box"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="word-text-box" style={{ marginLeft: "8px" }}>
                개
              </div>
            </div>
          </div>

          <div className="outer-box" style={{ marginTop: "58px" }}>
            <div className="inner-text" onClick={handleSubmit}>
              제출하기
            </div>
          </div>

          {/* <button className="submit-button" onClick={handleSubmit}>
          제출하기
        </button> */}

          {message && <p className="message">{message}</p>}

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
};

export default WordGame;
