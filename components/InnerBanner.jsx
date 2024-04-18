import React, {memo} from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import {Container} from "react-bootstrap";
import Title from "./Title";
import reactHtmlParser from "react-html-parser";
import VisibilitySensor from "react-visibility-sensor";
import {title} from "../styles/globalStyleVars";

const InnerBanner = ({img, title, srcSm}) => {
    return (
        <StyledInnerBanner className='inner-banner'>
            <Img banner={true} src={img} srcSm={srcSm}/>
            {title && <h1 className={'split-up'}>{reactHtmlParser(title)}</h1>}
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(450 / 1366 * 100%);
  position: relative;
  background-color: #DDD;

  h1 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 300;
    line-height: 60px;
    z-index: 2;
    font-family: ${title};
    text-transform: uppercase;
    width: 80%;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    height: fit-content;
  }


  @media (max-width: 767px) {
    padding-top: calc(400 / 375 * 100%);
    h1 {
      width: 100%;
      font-size: 42px;
      line-height: 42px;
    }
  }
`;

export default memo(InnerBanner);
