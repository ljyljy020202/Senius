import React from "react";
import "./styles/CogImproveMain.css";
import { useNavigate } from "react-router-dom";
import HeaderGame from "./HeaderGame";
import BottomBar from "./BottomBar";
import Game1 from "./assets/image 1723.png";
import Game2 from "./assets/image 1734.png";
import Star from "./assets/star 1.png";
import PictureFindGame from "./PictureFindGame";
import WordGame from "./WordGame";

const Card = ({
  imageSrc,
  title,
  subtitle,
  description,
  difficulty,
  points,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <img src={imageSrc} alt="Placeholder" className="card-image" />
        <div className="card-description">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-difficulty">
          <div className="difficulty-text">난이도 :</div>
          {Array.from({ length: difficulty }).map((_, idx) => (
            <img key={idx} src={Star} alt="Star" className="difficulty-star" />
          ))}
        </div>
        <div className="card-points">{`+${points}P`}</div>
      </div>
    </div>
  );
};

function CogImproveMain() {
  const navigate = useNavigate();
  const wordgamehandleNavigate = () => {
    navigate("/wordgame");
  };
  const picturefindgamehandleNavigate = () => {
    navigate("/picturefindgame");
  };
  return (
    <>
      <HeaderGame />
      <div className="screen">
        <div className="container">
          <Card
            imageSrc={Game1}
            title="단어 찾기 게임"
            description={
              <>
                제시된 단어와 같은 단어가
                <br />
                몇개인지 세는 게임이에요.
              </>
            }
            difficulty={3}
            points={500}
            onClick={wordgamehandleNavigate}
          />
          <Card
            imageSrc={Game2}
            title="그림 찾기 게임"
            description={
              <>
                제시된 그림과 같은 그림을
                <br />
                찾는 게임이에요.
              </>
            }
            difficulty={3}
            points={500}
            onClick={picturefindgamehandleNavigate}
          />
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default CogImproveMain;
