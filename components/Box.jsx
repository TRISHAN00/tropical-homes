import React, {memo, useState} from 'react';
import styled from "styled-components";
import 'react-modal-video/css/modal-video.min.css';
import ReactHtmlParser from "react-html-parser";
import {title} from "../styles/globalStyleVars";

const MyComponent = ({title, opacity, icon}) => {
    return (
        <StyledComponent opacity={opacity}>
            <div className={'d-flex justify-content-center flex-column align-items-center'}>
                <div className='feature__single__img'>
                    <img src={icon} alt=""/>
                </div>
                <div className={'feature__single__name'}>
                    <h4>{ReactHtmlParser(title)}</h4>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .feature__single {
    &__name {
      h4 {
        text-transform: uppercase;
        font-size: 24px;
        line-height: 30px;
        font-weight: 300;
        color: #fff;
        padding-top: 20px;
        font-family: ${title};
        text-align: center;
      }
    }

    &__img {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 100px;
      width: 100px;
      border-radius: 100%;
      overflow: hidden;
    }
  }

  @media (max-width: 767px) {
    .feature__single {
      &__name {
        h4 {
          font-size: 20px;
          line-height: 26px;
        }
      }
    }
  }
`;

export default memo(MyComponent);
