import React, {memo, useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import {hover, hoverNd, title} from "../../styles/globalStyleVars";
import Lines from "../Lines";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import reactHtmlParser from "react-html-parser";
import Link from "next/link";

const MyComponent = ({data}) => {
    const landowner = data?.posts?.list.find((f) => f?.data?.slug === "landowner")
    const customer = data?.posts?.list.find((f) => f?.data?.slug === "customer")

    useEffect(() => {
        if (window.innerWidth > 991) {
            gsap.to('.first', {
                x: '25%',
                duration: .6,
                scrollTrigger: {
                    trigger: ".partners",
                    scrub: 2
                }
            })
            gsap.to('.second', {
                x: '45%',
                duration: .6,
                scrollTrigger: {
                    trigger: ".partners",
                    scrub: 2
                }
            })
        }

        ScrollTrigger.refresh();
    }, [])

    return (
        <StyledComponent className={'partners pt-150 pb-150'}>
            <Lines/>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <div className="partners__text">
                            <h2 className={'first'}>{data?.section_data?.subtitle}</h2>
                            <h2 className={'second'}>{data?.section_data?.short_desc}</h2>
                        </div>
                    </Col>

                    <Col sm={12} md={9}>
                        <Row className={'partners__box-row '}>
                            <Col sm={12} md={6}>
                                <div className="partners__single">
                                    <Link href={'/landowners'}><a></a></Link>
                                    <div className="partners__single__btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.414"
                                             viewBox="0 0 17 17.414">
                                            <g id="Group_21288" data-name="Group 21288"
                                               transform="translate(-1538.5 1033.707)">
                                                <g id="Group_21287" data-name="Group 21287"
                                                   transform="translate(829.643 -975) rotate(-90)">
                                                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                                                          transform="translate(-1434.925 -0.643)" fill="none"
                                                          stroke="#1d3130"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="1"/>
                                                    <path id="Path_5048" data-name="Path 5048"
                                                          d="M1486.828,704.357v15.357"
                                                          transform="translate(-1436.828 5)" fill="none"
                                                          stroke="#1d3130"
                                                          stroke-linecap="round" stroke-width="1"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <Img
                                        src={landowner?.images?.[0]?.full_path ? landowner?.images?.[0]?.full_path : '/images/dynamic/partner1.jpg'}/>
                                    <p>{reactHtmlParser(landowner?.data?.short_desc)}</p>
                                    <h4>{landowner?.data?.title}</h4>
                                </div>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="partners__single">
                                    <Link href={'/customers'}><a></a></Link>
                                    <div className="partners__single__btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.414"
                                             viewBox="0 0 17 17.414">
                                            <g id="Group_21288" data-name="Group 21288"
                                               transform="translate(-1538.5 1033.707)">
                                                <g id="Group_21287" data-name="Group 21287"
                                                   transform="translate(829.643 -975) rotate(-90)">
                                                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                                                          transform="translate(-1434.925 -0.643)" fill="none"
                                                          stroke="#1d3130"
                                                          stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="1"/>
                                                    <path id="Path_5048" data-name="Path 5048"
                                                          d="M1486.828,704.357v15.357"
                                                          transform="translate(-1436.828 5)" fill="none"
                                                          stroke="#1d3130"
                                                          stroke-linecap="round" stroke-width="1"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <Img
                                        src={customer?.images?.[0]?.full_path ? customer?.images?.[0]?.full_path : '/images/dynamic/partner1.jpg'}/>
                                    <p>{customer?.data?.short_desc}</p>
                                    <h4>{customer?.data?.title}</h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  overflow: hidden;
  position: relative;
    margin-top: -2px;
  .partners__text {
    width: fit-content;
    height: fit-content;
    transform: rotate(-90deg) translateX(-70%) translateY(-100%);

    h2 {
      font-size: 48px;
      line-height: 60px;
      font-family: ${title};
      font-weight: 300;
      text-transform: uppercase;
      white-space: nowrap;

    }
  }

  .partners__single {
    padding-top: calc(500 / 400 * 100%);
    position: relative;
    overflow: hidden;

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 51;
      bottom: 0;
    }

    &:after {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.16);
      transform: translateY(100%);
      transition: .3s ease;
    }

    img {
      transition: filter .3s ease;
    }

    &__btn {
      position: absolute;
      height: 40px;
      width: 40px;
      background-color: ${hover};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 20px;
      right: 20px;
      z-index: 6;

      svg {
        transform: rotate(-45deg);
        transition: .4s ease;

        path {
          stroke: #FFF;
        }
      }
    }

    p {
      color: #FFF;
      position: absolute;
      top: 80px;
      left: 40px;
      right: 40px;
      z-index: 5;
      transform: translateY(-300%);
      transition: .5s ease;
    }

    h4 {
      font-size: 32px;
      line-height: 40px;
      font-family: ${title};
      text-transform: uppercase;
      position: absolute;
      color: ${hoverNd};
      font-weight: 300;
      bottom: 60px;
      left: 40px;
      z-index: 6;
    }

    &:hover {
      .partners__single__btn svg {
        transform: none;
      }

      img {
        filter: blur(5px);
      }

      &:after {
        transform: none;
      }

      p {
        transform: none;
      }
    }

    &.bordered {
      border: 1px solid rgba(38, 38, 38, 0.5);

      h4, p {
        color: #1d3130;
      }

      &:after {
        background-color: #F9F9F9;
      }
    }

  }

  .partners__box-row {
    justify-content: space-between;

    .col-md-6 {
      max-width: calc(50% - 25px);
    }
  }

  @media (max-width: 991px) {
    .partners__text {
      transform: none;
      margin-bottom: 30px;

      h2 {
        font-size: 32px;
        line-height: 40px;
      }
    }

    .col-md-3, .col-md-9 {
      min-width: 100%;
    }

    .partners__box-row {
      .col-md-6 {
        min-width: 50%;
      }
    }

    .partners__single h4 {
      left: 15px;
      bottom: 30px;
      font-size: 28px;
      line-height: 32px;
    }

    .bordered {
      background-color: #F9F9F9;
    }
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    padding-bottom: unset;
    margin-bottom: 80px;
  }

  @media (max-width: 550px) {
    .partners__box-row .col-md-6 {
      min-width: 100%;

      &:nth-of-type(1) {
        margin-bottom: 20px;
      }
    }

    .partners__single {
      padding-top: calc(250 / 345 * 100%);

      p {
        display: none;
      }
    }

  }


`;

export default MyComponent;
