import React from "react";
import "./styles/CheckPoint.css";
import { useLocation } from "react-router-dom";
import HeaderBasic from "./HeaderBasic";
import HistoryItem from "./HistoryItem";
import BottomBar from "./BottomBar";

function CheckPoint() {
  const location = useLocation();
  const data = location.state?.data; // 데이터가 존재하는지 확인

  console.log("location.state.data:", data); // 데이터 구조를 확인

  // 데이터가 존재하면 historyData를 생성하고, 그렇지 않으면 빈 배열을 반환
  const historyData = data?.object?.map(transaction => ({
    title: transaction.content,
    date: new Date(transaction.time).toLocaleString(), // 시간 형식을 원하는 형태로 변환
    description: transaction.content,
    points: `${transaction.point > 0 ? '+' : ''}${transaction.point}P`,
    status: transaction.point > 0 ? "적립" : "사용",
    isPositive: transaction.point > 0
  })) || [];

  return (
      <>
        <HeaderBasic />
        <div className="screen">
          <div className="point-history-title">
            <div className="point-history-container">
              <div className="point-history-text">포인트 내역</div>
            </div>
          </div>
          <div className="points-history">
            {historyData.length > 0 ? (
                historyData.map((item, index) => (
                    <HistoryItem
                        key={index}
                        title={item.title}
                        date={item.date}
                        description={item.description}
                        points={item.points}
                        status={item.status}
                        isPositive={item.isPositive}
                    />
                ))
            ) : (
                <div className="no-history">포인트 내역이 없습니다.</div>
            )}
          </div>
          <div className="points-banner">
            <div className="banner-text">보유 포인트: {data?.userpoint || 0}P</div>
          </div>
        </div>
        <BottomBar />
      </>
  );
}

export default CheckPoint;
