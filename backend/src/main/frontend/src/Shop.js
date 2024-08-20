import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "./component/ProductList";
import Points from "./component/Points";
import "./styles/Shop.css";
import GiftItem from "./component/GiftItem";
import BottomBar from "./BottomBar";
import HeaderShop from "./HeaderShop";
import { PointsContext } from "./PointsContext"; // PointsContext import

const Shop = () => {
    const location = useLocation();
    const { data } = location.state || { data: { userpoint: 0, object: [] } }; // 기본값 설정
    const { points, setPoints } = useContext(PointsContext); // PointsContext에서 points와 setPoints 가져오기

    // 컴포넌트가 마운트될 때 points 설정
    React.useEffect(() => {
        if (data.userpoint) {
            setPoints(data.userpoint);
        }
    }, [data.userpoint, setPoints]);

    return (
        <>
            <HeaderShop />
            <div className="screen">
                <div className="points-display-box">
                    <div className="points-display-container">
                        <div className="points-display-text">보유 포인트: {points}P</div>
                    </div>
                </div>

                <GiftItem />
            </div>

            <BottomBar />
        </>
    );
};

export default Shop;
