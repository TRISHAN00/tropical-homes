import React from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import reactHtmlParser from "react-html-parser";
import {title} from "../styles/globalStyleVars";
import {ImgBg} from "./ImgBg";

const InnerBanner = ({img, title, location, srcSm}) => {
    return (
        <StyledInnerBanner className='inner-banner'>
            <ImgBg banner={true} src={img} srcSm={srcSm}/>
            <div className="content">
                {title && <h1 className={'split-up'}>{reactHtmlParser(title)}</h1>}
                {location && <p className={'split-up'}>{location}</p>}
            </div>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(768 / 1366 * 100%);
  position: relative;
  background-color: #DDD;

  .content {
    position: absolute;
    content: '';
    inset: 0 15px 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 60px;
      font-weight: 300;
      line-height: 60px;
      letter-spacing: 3px;
      color: #fff;
      font-family: ${title};
      text-transform: uppercase;
      text-align: center;
      @media (min-width: 768px) {
        max-width: 80%;
      }
    }

    p {
      font-size: 24px;
      font-weight: 300;
      line-height: 30px;
      text-transform: uppercase;
      color: #fff;
      font-family: ${title};
      text-align: center;
    }
  }


  @media (max-width: 767px) {
    padding-top: calc(812 / 375 * 100%);

    .content h1 {
      font-size: 42px;
      line-height: 42px;
    }
  }
`;

export default InnerBanner;
