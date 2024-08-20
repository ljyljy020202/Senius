import React from "react";
import axios from "axios";
import "./styles/LoginSlider.css";
import { ReactComponent as Image12 } from "./assets/image 12.svg";
import { ReactComponent as IconKakako } from "./assets/kakaoicon.svg";
import { ReactComponent as SeniusLogo } from "./assets/SeniorsLogo.svg";
import IconBackground from "./assets/image 1670.png";
import { useGlobalState } from "./GlobalState"; // GlobalState에서 custom hook을 가져옵니다.
import { useSpring, animated } from 'react-spring';
import {useNavigate} from "react-router-dom";

function LoginSlider() {
    const { dispatch } = useGlobalState(); // 전역 상태의 dispatch를 가져옵니다.
    const navigete=useNavigate();
    const handleKakaoLoginClick = () => {
        navigete("/game"); // Navigate to /game
    };

    const slideProps = useSpring({
        from: { x: 0 },
        to: async (next) => {
            while (1) {
                await next({ x: 0 });
                await next({ x: -961 + 390 });
            }
        },
        config: { duration: 5000 },
        reset: true,
    });

    return (
        <div className="loginslider-screen">
            <div className="slider-wrapper">
                <animated.div
                    className="slider"
                    style={{
                        transform: slideProps.x.to(x => `translateX(${x}px)`),
                    }}
                >
                    <img src={IconBackground} className="BackgroundImg" alt="Background" />
                </animated.div>
            </div>
            <div className="screenbulr"></div>
            <div className="loginslider-container">
                <div className="loginslider-text-block" style={{ marginTop: "26px" }}>
                    재미있게
                    <br />
                </div>
                <div className="loginslider-text-block">
                    건강하게
                    <br />
                </div>
                <div className="loginslider-text-block">
                    오래오래
                    <br />
                </div>

                <div className="loginslider-footer">
                    <div className="logo-container">
                        <div className="loginslider-overlay"></div>
                        <SeniusLogo className="imageLogo" alt="Placeholder" />
                    </div>
                    <div className="loginslider-footer-text">시니어스</div>
                </div>
            </div>
            <div className="kakao-login-button">
                <div className="kakao-login-content" onClick={handleKakaoLoginClick}>
                    <IconKakako className="kakao-login-icon" alt="Kakao Icon" />
                    <div className="kakao-login-text">카카오톡 로그인하기</div>
                </div>
            </div>
        </div>
    );
}

export default LoginSlider;
