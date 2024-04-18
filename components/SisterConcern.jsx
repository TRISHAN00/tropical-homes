import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "./Title";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "swiper/css/grid";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination, Grid} from "swiper";
import {hover, text} from "../styles/globalStyleVars";

const MyComponent = ({bg, data}) => {
    return (
        <StyledComponent bg={bg} className={'sister-concern  pb-150'}>
            <Container>
                <Row>
                    <Col sm={12} className={'d-flex align-items-end flex-wrap justify-content-between'}>
                        <Title margin={'0 0 0px 0'} text={data?.section_data?.title}/>
                        <div className="slider-nav">
                            <ul>
                                <li className={'go-left'}><img src="/images/static/arrow-left-v2.svg"
                                                               alt="left"/></li>
                                <li className={'go-right'}><img src="/images/static/arrow-right-v2.svg"
                                                                alt="right"/></li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <div className="sister-concern__slider">
                    <Swiper loop={false}
                            slidesPerView={2}
                            allowSlideNext={true}
                            allowSlidePrev={true}
                            allowTouchMove={false}
                            spaceBetween={30}
                            grid={{
                                rows: 2,
                                fill: "row",
                            }}
                            speed={500}
                            navigation={{
                                prevEl: '.sister-concern .go-left',
                                nextEl: '.sister-concern .go-right',
                            }}
                            modules={[Autoplay, Pagination, Navigation, Grid]}
                            breakpoints={{
                                900: {
                                    slidesPerView: 4,
                                    spaceBetween: 120,
                                    grid: false
                                },
                                601: {
                                    slidesPerView: 3,
                                    spaceBetween: 120,
                                    grid: false
                                },
                            }}
                        // autoplay={false}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                    >
                        {
                            data?.images?.list && data?.images?.list?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="sister-concern__slider__inner">
                                            <img loading={"lazy"} src={item?.full_path} alt=""/>

                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: ${p => p.bg};

  .sister-concern__slider {
    margin-top: 40px;

    &__inner {
      padding-top: calc(140 / 200 * 100%);
      position: relative;
      border: 1px solid #BEC7C7;
      background-color: #fff;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: contain;
        max-width: 85%;
        margin: auto;
      }
    }
  }

  .swiper-slide {
    position: relative;

    &:after {
      content: '';
      height: 100%;
      width: 1px;
      background-color: rgba(127, 127, 127, 0.5);
      right: -60px;
      position: absolute;
      top: 0;
      bottom: 0;
      @media (max-width: 600px) {
        right: -15px;
      }
    }
  }

  .slider-nav {
    ul {
      display: flex;

      li {
        background-color: #221F1F;
        border: 1px solid #221F1F;
        transition: .3s ease;

        &:after {
          background-color: ${hover};
        }

        &:nth-of-type(1) {
          margin-right: 20px;
        }

        img {
          filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(70deg) brightness(108%) contrast(108%);
        }

        &:hover {
          border-color: ${hover};
        }
      }
    }
  }

  @media (max-width: 600px) {
    .title {
      width: 100%;
    }

  }
`;

export default memo(MyComponent);
