import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/CogImprove.css";
import CanPicture from "./assets/can.png";

function CogImprove() {
  const navigate = useNavigate();

  const renderGameCard = () => (
    <div className="game-card">
      <div className="game-grid">
        {Array.from({ length: 16 }, (_, index) => (
          <div key={index} className="game-cell">
            가/나
          </div>
        ))}
      </div>
      <div className="game-info">
        <h2>단어 찾기</h2>
        <p>- 단어찾기에 관한 설명</p>
        <div className="game-stats">
          <div className="stat-row">
            <span>가:</span> <input type="text" className="stat-input" /> 개
          </div>
          <div className="stat-row">
            <span>나:</span> <input type="text" className="stat-input" /> 는 개
          </div>
        </div>
        <button
          className="reset-button-word"
          onClick={() => navigate("/wordgame")}
        >
          시작하기
        </button>
        <div className="game-difficulty">
          <span>난이도:</span> <span className="stars">★★★</span>
        </div>
        <div className="game-points">+500P</div>
      </div>
    </div>
  );

  const renderGameImage = () => (
    <div className="game-card" onClick={() => alert("Next screen!")}>
      <div className="game-can">
        <div>
          <img src={CanPicture} alt="picture"></img>
          <img src={CanPicture} alt="picture"></img>
        </div>
      </div>
      <div className="game-info">
        <h2>그림 맞추기</h2>
        <p>- 설명</p>
        <button className="reset-button-picture">시작하기</button>
        <div className="game-difficulty">
          <span>난이도:</span> <span className="stars">★★★</span>
        </div>
        <div className="game-points">+500P</div>
      </div>
    </div>
  );

  return (
    <div className="CogImprove">
      {renderGameCard()}
      {renderGameImage()}
    </div>
  );
}

export default CogImprove;
