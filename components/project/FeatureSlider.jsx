import React, {memo, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";

import {Img} from "../Img";
import Box from "../Box";
import {hover, title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";
import {Pagination, Grid} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid";

const CustomNextArrow = (props) => (
    <div onClick={props.onClick} className="your-next-arrow-class">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_21000" data-name="Group 21000" transform="translate(-9128 -1703)">
                <g id="Ellipse_410" data-name="Ellipse 410" transform="translate(9128 1743) rotate(-90)" fill="none"
                   stroke="#fff" stroke-width="1">
                    <circle cx="20" cy="20" r="20" stroke="none"/>
                    <circle cx="20" cy="20" r="19.5" fill="none"/>
                </g>
                <g id="Group_20998" data-name="Group 20998" transform="translate(8430.643 1773) rotate(-90)">
                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                          transform="translate(-1434.925 -0.643)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_5048" data-name="Path 5048" d="M1486.828,704.357v15.357"
                          transform="translate(-1436.828 5)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-width="1"/>
                </g>
            </g>
        </svg>
    </div>
);

const CustomPrevArrow = (props) => (
    <div onClick={props.onClick} className="your-prev-arrow-class">
        {/* Your custom prev arrow content */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <g id="Group_21001" data-name="Group 21001" transform="translate(-7878 -1703)">
                <g id="Ellipse_411" data-name="Ellipse 411" transform="translate(7918 1703) rotate(90)" fill="none"
                   stroke="#fff" stroke-width="1">
                    <circle cx="20" cy="20" r="20" stroke="none"/>
                    <circle cx="20" cy="20" r="19.5" fill="none"/>
                </g>
                <g id="Group_20999" data-name="Group 20999" transform="translate(8615.357 1673) rotate(90)">
                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                          transform="translate(-1434.925 -0.643)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_5048" data-name="Path 5048" d="M1486.828,704.357v15.357"
                          transform="translate(-1436.828 5)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-width="1"/>
                </g>
            </g>
        </svg>
    </div>
);

const Feature = ({data, windowWidth}) => {
    const images = data?.images;
    const [slider, setSlider] = useState(null);

    const handleNext = () => {
        slider?.slickNext()
    }
    const handlePrev = () => {
        slider.slickPrev()
    }


    return (
        <StyledComponent id={"features"} className="feature pt-150">
            {
                windowWidth > 767 ? <Img src={'/images/dynamic/feature.jpg'}/> :
                    <Img src={'/images/dynamic/projects/at-aglance-mb.jpg'}/>
            }

            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="feature__title">
                            {data?.data?.subtitle &&
                                <h2 className={'split-up'}>{reactHtmlParser(data?.data?.subtitle)}</h2>}
                            <div className="nav slider-nav">
                                <ul>
                                    <li onClick={handlePrev} className="hover slider_prev go-left">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                             viewBox="0 0 16 16" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                        </svg>
                                    </li>
                                    <li onClick={handleNext} className="hover slider_next go-right">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                             viewBox="0 0 16 16" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className="slider" style={{width: "100%"}}>
                            {images?.length > 0 &&
                                <Swiper
                                    slidesPerView={2}
                                    grid={{
                                        rows: 2,
                                        fill: "row",
                                    }}
                                    speed={800}
                                    breakpoints={{

                                        991: {
                                            slidesPerView: 4,
                                        },
                                        767: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    modules={[Grid, Pagination]}
                                    className="mySwiper"
                                    allowTouchMove={true}
                                    navigation={{
                                        prevEl: '.feature .go-left',
                                        nextEl: '.feature .go-right',
                                    }}
                                >
                                    {
                                        images?.length > 0 && images?.map((item) => {

                                            return (
                                                <SwiperSlide key={item?.short_title}>
                                                    <div className="feature__single">
                                                        <Box
                                                            title={item?.short_title}
                                                            icon={item?.full_path}
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            )

                                        })
                                    }


                                </Swiper>
                            }
                            <div className="mb-nav slider-nav">
                                <ul>
                                    <li onClick={handlePrev} className="hover slider_prev go-left">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                             viewBox="0 0 16 16" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                        </svg>
                                    </li>
                                    <li onClick={handleNext} className="hover slider_next go-right">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                             viewBox="0 0 16 16" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};
const StyledComponent = styled.section`
  //margin-top: -2px;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;

  .your-prev-arrow-class {
    display: none;
  }

  .your-next-arrow-class {
    display: none;
  }

  .feature__single__name {
    padding: 0 30px;
  }

  .nav ul {
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
    }
  }

  .mb-nav {
    display: none;
  }

  .mb-nav ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding-top: 30px;

    li {
      cursor: pointer;
    }
  }

  .col {
    padding-left: 0px;
    padding-right: 0px;
  }

  .feature {
    &__row {
      margin-bottom: 60px;
      @media (max-width: 767px) {
        margin-bottom: 40px;
      }
    }

    &__title {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 48px;
        font-weight: 300;
        line-height: 48px;
        color: #fff;
        font-family: ${title};
        padding-bottom: 48px;
        text-transform: uppercase;
      }

      @media (max-width: 767px) {
        margin-bottom: 20px;
      }
    }

    &__disclaimer {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 100%;
      gap: 6px;

      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: #b2a89f;
        height: 22px;
      }
    }

    &__single {
      position: relative;
    }
  }

  @media (min-width: 767px) {
    .slide {
      height: 100%;
    }

    .slick-slide > div {
      min-height: 100%;

      &:nth-of-type(1) {
        margin-bottom: 60px;
      }
    }
  }


  //customize button

  .slick-dots {
    display: flex;
    justify-content: center;
    gap: 30px; /* Set a gap of 30px between dots */
  }

  .slick-dots li {
    width: 20px; /* Set the width for non-active dots */
  }

  .slick-dots li button {
    width: 100%;
    height: 2px; /* Set the height for all dots */
    padding: 3px;
    background: rgba(86,
    87,
    90,
    0.5); /* Change the background color for all dots */
    border-radius: 20px;

    &:before {
      content: "";
      display: block;
    }
  }

  .slick-dots li.slick-active {
    width: 60px; /* Set the width for active dots */

    button {
      background: #56575a; /* Change the background color for all dots */
    }
  }

  @media (max-width: 991px) {
    .shadow-right {
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(75%);

      svg {
        width: 40%;
      }
    }

    .shadow-left {
      transform: translateX(-20%);
      left: 0;

      svg {
        width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 80px !important;
    .nav {
      display: none;
    }

    .mb-nav {
      display: block !important;
    }

    .feature__title h2 {
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      padding-right: 20px;
    }

    .feature__single__img {
      top: 10px;
    }

    .feature__single h2 {
      top: 110px;
    }
  }

  .slick-track {
    display: flex !important;
    height: 100%;
  }

  .slick-slide {

    .slick-slide > div {

      .myItemClass {
        height: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    //margin-left: -15px;
    //margin-right: -15px;
    .title {
      margin-bottom: 0;
    }

    .slick-dots {
      text-align: start;
    }
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }

  .slick-dots {
    bottom: -60px;
  }

  @media (max-width: 600px) {
    .feature__title h2 {
      padding-bottom: 30px;
    }
  }


  .slider-nav {
    svg {
      color: #FFF;
      position: relative;
      z-index: 2;
    }

    li {
      &:hover {
        border-color: ${hover} !important;
      }

      &:after {
        background-color: ${hover};
      }
    }
  }


  .swiper-slide {
    margin-bottom: 60px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }

`;
export default memo(Feature);
