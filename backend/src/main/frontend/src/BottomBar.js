import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import "./styles/BottomBar.css";
import {ReactComponent as Idea} from "./assets/idea 1.svg";
import {ReactComponent as ShoppingCart} from "./assets/shopping-cart (1) 1.svg";
import {ReactComponent as MyInfo} from "./assets/info (2) 1.svg";
import axios from "axios";
import {UserContext} from "./UserContext";

const MenuItem = ({text, Icon, altText, onClick}) => {
    return (
        <div className="menu-item" onClick={onClick}>
            <div className="menu-item-content">
                <div className="menu-item-text">{text}</div>
            </div>
            <Icon className="menu-item-icon" alt={altText}/>
        </div>
    );
};

const BottomBar = () => {
    const navigate = useNavigate();
    const {setUserInfo} = useContext(UserContext); // Context에서 setUserInfo 가져오기
    const userId = "7chabin@naver.com"; //이 부분을 로그인하고 난 이후의 변수로 받아야 함

    const handleMyInfoClick = async () => {
        try {
            const response = await axios.get(
                `/api/v1/member/profile`,
                {
                    params: {id: userId},
                }
            );
            const {name, age, phone, id, profile} = response.data;
            // UserContext에 데이터 설정
            setUserInfo({name, age, phone, id, profile});
            navigate("/myinfo");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleShoppingMall = async () => {
        const id = "7chabin@naver.com";
        try {
            const response = await fetch(
                `/api/v1/memberpoint/history?id=${id}`
            ); // id를 쿼리 파라미터로 추가
            const result = await response.json();
            console.log(result);

            navigate("/shop", {state: {data: result}}); // checkpoint 페이지로 데이터와 함께 이동
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    return (
        <div className="bottom-bar">
            <MenuItem
                onClick={() => navigate("/cogimprovemain")}
                text="인지 향상"
                Icon={Idea}
                altText="인지 향상"
            />
            <MenuItem
                onClick={handleShoppingMall}
                text="쇼핑몰"
                Icon={ShoppingCart}
                altText="쇼핑몰"
            />
            <MenuItem
                onClick={handleMyInfoClick}
                text="내 정보"
                Icon={MyInfo}
                altText="내 정보"
            />
        </div>
    );
};

export default BottomBar;
