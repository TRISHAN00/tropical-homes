import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import {CSSPlugin, gsap, TimelineLite} from "gsap";
import {DrawSVGPlugin} from "gsap/dist/DrawSVGPlugin";
import { useRouter } from 'next/router';

const MyComponent = () => {
    let tl = new TimelineLite();
    let t2 = new TimelineLite();
    const location = useRouter();
    gsap.registerPlugin(DrawSVGPlugin);
    useEffect(() => {
        tl.fromTo('.page-change', .6, {
            display: 'flex',
            opacity: 1,
        }, {
            duration: 1.5,
            delay: 1,
            opacity: 0,
            display: 'none'
        })
        // t2.fromTo('.page-change svg path', {
        //     drawSVG: "0%",
        // }, {
        //     duration: 3,
        //     drawSVG: "100%",
        //     ease: 'Cubic.easeOut',
        //     stagger: .02
        // })
    }, [location.pathname])

    return (
        <StyledComponent className={'page-change'}>
            <img src="/images/static/logo.svg" alt=""/>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  height: 100vh;
  position: fixed;
  background-color: #000;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 9999999999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyComponent;
