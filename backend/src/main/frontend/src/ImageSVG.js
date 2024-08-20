import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // UserContext 파일을 올바르게 import하세요

function ImageSVG() {
    const { userInfo } = useContext(UserContext); // UserContext에서 userInfo 가져오기
    const profileUrl = userInfo.profile;

    return (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Ellipse 2">
                <circle cx="35" cy="35" r="35" fill="#D9D9D9" />
                <circle cx="35" cy="35" r="35" fill="url(#pattern0_79_67)" />
            </g>
            <defs>
                <pattern id="pattern0_79_67" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_79_67" transform="translate(-0.388889) scale(0.0037037)" />
                </pattern>
                <image id="image0_79_67" xlinkHref={profileUrl} width="480" height="270" />
            </defs>
        </svg>
    );
}

export default ImageSVG;
