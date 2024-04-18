import React, {memo, useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import {Img} from "../Img";
import Button from "../Button";
import Lines from "../Lines";
import reactHtmlParser from "react-html-parser";
import {gsap} from "gsap";

const MyComponent = ({data}) => {
    const behind = data?.images?.list?.find((f) => f?.Behind === "on");
    const Top = data?.images?.list?.find((f) => f?.Top === "on");

    useEffect(() => {
        // ScrollTrigger.refresh();
        if (window.innerWidth > 991) {
            gsap.to('.bottom-img', {
                y: '-120%',
                duration: .3,
                scrollTrigger: {
                    trigger: ".about-img",
                    scrub: 2
                }
            })
        }

    }, [data])

    return (
        <StyledComponent className={'about-img pt-150 pb-150'}>
            <Lines/>
            <Container>
                <Row>
                    <Col sm={12} md={9}>
                        <Title margin={'0 0 60px 0'}
                               text={data?.section_data?.subtitle}/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={4}>
                        <div className="about-img__left">
                            <div className="about-img__left__img parallax-img">
                                <Img src={behind?.full_path}/>
                            </div>
                            <img className={'bottom-img'} src={Top?.full_path} alt=""/>
                        </div>

                    </Col>

                    <Col sm={12} md={{span: 7, offset: 1}}>
                        {
                            reactHtmlParser(data?.section_data?.description)
                        }
                        <Button margin={'40px 0 0 0'} src={'/about'} text={''}/>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #F9F9F9;
  position: relative;

  .about-img__left {
    padding-right: 80px;
    position: relative;

    &__img {
      padding-top: calc(370 / 300 * 100%);
      position: relative;
      @media (min-width: 767px) {
        margin-bottom: 60px;
      }
    }

    .bottom-img {
      position: absolute;
      bottom: -200px;
      right: 0px;
      max-width: 70%;
    }
  }

  p {
    &:not(:nth-last-of-type(1)) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991px) {
    .about-img__left {
      padding-right: 30px;

      .bottom-img {
        max-width: 50%;
        bottom: -30px;
      }
    }
  }

  @media (max-width: 767px) {
    .about-img__left {
      padding-right: 50px;
      margin-bottom: 70px;

      .bottom-img {
        bottom: -40px;
      }
    }
  }
`;

export default MyComponent;
