import React from 'react';

const CustomNextArrow = (props) => (
    <div onClick={props.onClick} className="" style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_21000" data-name="Group 21000" transform="translate(-9128 -1703)">
                <g id="Ellipse_410" data-name="Ellipse 410" transform="translate(9128 1743) rotate(-90)" fill="none" stroke="#fff" stroke-width="1">
                    <circle cx="20" cy="20" r="20" stroke="none"/>
                    <circle cx="20" cy="20" r="19.5" fill="none"/>
                </g>
                <g id="Group_20998" data-name="Group 20998" transform="translate(8430.643 1773) rotate(-90)">
                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8" transform="translate(-1434.925 -0.643)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_5048" data-name="Path 5048" d="M1486.828,704.357v15.357" transform="translate(-1436.828 5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                </g>
            </g>
        </svg>
    </div>
);


export default CustomNextArrow;
