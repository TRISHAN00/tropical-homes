import React, {memo, useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import {text, hover, title} from "../../styles/globalStyleVars";
import {Img} from "../Img";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination, Grid} from "swiper";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, id}) => {

    let [offset, setOffset] = useState(15)
    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft + 15)
        window.addEventListener('resize', () => {
            setOffset(document.querySelector('.container').offsetLeft + 15)
        })
    }, [])

    // console.log('data about', data)

    return (
        <StyledComponent offset={offset} className={'directors pt-150 pb-150'} id={id}>
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
            </Container>

            <Container fluid className={'pr-0'} style={{paddingLeft: offset + 'px'}}>
                <div className="directors__slider">
                    <Swiper loop={false}
                            slidesPerView={1}
                            allowSlideNext={true}
                            allowSlidePrev={true}
                            allowTouchMove={false}
                            spaceBetween={30}
                            speed={500}
                            navigation={{
                                prevEl: '.directors .go-left',
                                nextEl: '.directors .go-right',
                            }}
                            modules={[Autoplay, Pagination, Navigation, Grid]}
                            breakpoints={{
                                900: {
                                    slidesPerView: 3,
                                },
                                601: {
                                    slidesPerView: 2,
                                },
                            }}
                        // autoplay={false}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                    >
                        {
                            data?.images?.list?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="directors__slider__single">
                                            <div className="directors__slider__single__inner">
                                                <Img src={item?.full_path}/>
                                                <div className="content">
                                                    <h4>{reactHtmlParser(item?.short_title)}</h4>
                                                    <p>{reactHtmlParser(item?.short_desc)}</p>
                                                </div>
                                            </div>
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
  background-color: #F9F9F9;

  .directors__slider {
    margin-top: 30px;

    &__single {
      position: relative;

      &__inner {
        padding-top: calc(540 / 370 * 100%);
        position: relative;

        .content {
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: rgba(29, 49, 48, 0.8);
          z-index: 2;
          padding: 30px;
          width: 100%;

          h4 {
            font-size: 24px;
            font-weight: 300;
            line-height: 30px;
            color: #FFF;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-family: ${title};
          }

          p {
            font-size: 14px;
            line-height: 20px;
            text-transform: uppercase;
            color: #ffffff;
            letter-spacing: 2px;
          }
        }
      }
    }
  }


  .slider-nav {
    ul {
      display: flex;

      li {
        background-color: ${text};
        border: 1px solid ${text};
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

  .swiper {
    padding-right: ${p => p.offset}px;
  }

  @media (max-width: 600px) {
    .directors__slider__single__inner .content {
      padding: 25px 15px;

      h4 {
        font-size: 20px;
        line-height: 26px;
      }

    }

    .swiper {
      padding-right: 80px;
    }

    .title {
      width: 100%;
    }

    .slider-nav {
      //margin-bottom: 40px;
    }
  }
`;

export default memo(MyComponent);
