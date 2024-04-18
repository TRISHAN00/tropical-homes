import styled from "styled-components";
import React, { useState, useEffect } from 'react';


const MyComponent = ({offset}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Calculate the scroll percentage
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollPercentage = (scrollY / document.body.scrollHeight) * 100;

        // Set the visibility based on the scroll percentage
        setIsVisible(scrollPercentage > 50);
    };

    const handleScrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <StyledComponent offset={offset} onClick={handleScrollToTop} style={{ display: isVisible ? 'block' : 'none' }} className={'go-top'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g id="Ellipse_398" data-name="Ellipse 398" fill="none" stroke="#fff" stroke-width="1">
                    <circle cx="20" cy="20" r="20" stroke="none"/>
                    <circle cx="20" cy="20" r="19.5" fill="none"/>
                </g>
                <g id="Group_17779" data-name="Group 17779" transform="translate(12 12)">
                    <path id="Path_5047" data-name="Path 5047" d="M0,0,8,8l8-8" transform="translate(0 8)" fill="none"
                          stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_5048" data-name="Path 5048" d="M0,0V15.357" transform="translate(8)" fill="none"
                          stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                </g>
            </svg>

        </StyledComponent>
    );
};

const StyledComponent = styled.div`
  position: fixed;
  bottom: 20px;
  right: ${props => props.offset + 'px'};
  display: none;
  transition: 0.3s;
`;

export default MyComponent;
