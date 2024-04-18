import React, {memo, useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, id1}) => {
    return (
        <StyledComponent className={'mission pt-150 pb-150'}>
            <Container>
                <Row>
                    {
                        data?.posts?.list?.map((item) => {
                            return (
                                <div id={item?.data?.slug} className="mission__single d-flex flex-wrap">
                                    <Col sm={12} md={6} className={'mission__single__text'}>
                                        <Title text={item?.data?.title} color={'#FFF'} margin={'0 0 40px 0'}/>
                                        {reactHtmlParser(item?.data?.description)}
                                    </Col>

                                    <Col sm={12} md={6}>
                                        <div className="mission__single__img parallax-img">
                                            <Img src={item?.images?.[0]?.full_path}/>
                                        </div>
                                    </Col>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  //background-image: url('/images/static/mission-bg.png');
  background-color: #1D3130;
  //background-blend-mode: multiply;
  background-repeat: repeat;
  //background-size: contain;
  color: #FFF;

  .mission__single {
    p {
      color: #ffffff;

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 20px;
      }
    }

    ul {
      margin-top: 40px;

      li {
        font-size: 24px;
        font-weight: 300;
        line-height: 30px;
        font-family: ${title};
        text-transform: capitalize;
        padding-bottom: 15px;
        margin-bottom: 15px;
        color: #FFF;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      }
    }

    &__img {
      padding-top: calc(500 / 570 * 100%);
      position: relative;
    }

    &:nth-of-type(odd) {
      .mission__single__text {
        padding-right: 100px;
      }
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      .mission__single__text {
        padding-left: 100px;
      }
    }

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 100px;
    }

  }

  @media (max-width: 991px) {
    .mission__single__text {
      padding: 0 15px !important;
    }

  }

  @media (max-width: 767px) {
    .mission__single__text {
      margin-bottom: 40px;

      ul {
        li {
          font-size: 20px;
          line-height: 26px;
        }
      }
    }

    .mission__single p:not(:nth-last-of-type(1)) {
      margin-bottom: 15px;
    }

    .mission__single:not(:nth-last-of-type(1)):not(:nth-last-of-type(1)) {
      margin-bottom: 60px;
    }
  }

`;

export default memo(MyComponent);
