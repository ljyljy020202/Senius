import React from "react";
import "../styles/Points.css";

const Points = ({ points }) => {
  return (
    <div className="PointsContainer">
      <div className="Points">보유 포인트: {points}P</div>
    </div>
  );
};

export default Points;
