import React, {memo, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import {hover, title} from "../../styles/globalStyleVars";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Gallery = ({padding, background, data}) => {
    let containerRef = useRef();
    const [offset, setOffset] = useState(100)

    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft)

        window.addEventListener('load', function () {
            setOffset(document.querySelector('.container').offsetLeft)

        })
        window.addEventListener('resize', function () {
            setOffset(document.querySelector('.container').offsetLeft)

        })
    }, [])


    return (

        <StyledBox data-scroll-container offset={offset} background={background}
                   className={`showroom slider_component ${padding ? padding : 'pt-150 pb-150'}`}>
            <LightgalleryProvider>
                <Container ref={containerRef} className={'version_one'}>
                    <Row>

                        <Col md={12}>

                            <div className="testimonial__head">

                                <div className="testimonial__head__text">
                                    {data?.data?.title && <h2>{data?.data?.title}</h2>}
                                </div>
                                <div className="testimonial__head__navigation slider-nav">
                                    <ul>
                                        <li className="hover slider_prev go-left">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 16 16" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                            </svg>
                                        </li>
                                        <li className="hover slider_next go-right">
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
                <Container fluid ref={containerRef} className={'p-0'} md={12}>
                    <Swiper
                        // loop={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        speed='1000'
                        navigation={{
                            prevEl: '.showroom .go-left',
                            nextEl: '.showroom .go-right',
                        }}
                        initialSlide={2}
                        autoplay={false}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,

                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,

                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper"

                    >
                        {
                            data?.images?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial__single">
                                            <Row>
                                                <Col sm={5}>
                                                    <div className="testimonial__single__image video">
                                                        <Img radius={'21px'}
                                                             src={item?.full_path}/>
                                                        <LightgalleryItem src={item?.full_path}>
                                                        </LightgalleryItem>
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="55"
                                                                 height="55" viewBox="0 0 55 55">
                                                                <defs>
                                                                    <filter id="Ellipse_188" x="0" y="0" width="55"
                                                                            height="55" filterUnits="userSpaceOnUse">
                                                                        <feOffset dy="5" input="SourceAlpha"/>
                                                                        <feGaussianBlur stdDeviation="2.5"
                                                                                        result="blur"/>
                                                                        <feFlood flood-opacity="0.2"/>
                                                                        <feComposite operator="in" in2="blur"/>
                                                                        <feComposite in="SourceGraphic"/>
                                                                    </filter>
                                                                </defs>
                                                                <g id="Group_21282" data-name="Group 21282"
                                                                   transform="translate(-390.5 -2098.5)">
                                                                    <g transform="matrix(1, 0, 0, 1, 390.5, 2098.5)"
                                                                       filter="url(#Ellipse_188)">
                                                                        <circle id="Ellipse_188-2"
                                                                                data-name="Ellipse 188" cx="20" cy="20"
                                                                                r="20" transform="translate(7.5 2.5)"
                                                                                fill="#fff"/>
                                                                    </g>
                                                                    <g id="Group_5405" data-name="Group 5405"
                                                                       transform="translate(-0.5 1.5)">
                                                                        <line id="Line_11" data-name="Line 11" y2="10"
                                                                              transform="translate(418.5 2114.5)"
                                                                              fill="none" stroke="#1a1a1a"
                                                                              stroke-linecap="round" stroke-width="1"/>
                                                                        <line id="Line_12" data-name="Line 12" y2="10"
                                                                              transform="translate(423.5 2119.5) rotate(90)"
                                                                              fill="none" stroke="#1a1a1a"
                                                                              stroke-linecap="round" stroke-width="1"/>
                                                                    </g>
                                                                </g>
                                                            </svg>


                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Container>
            </LightgalleryProvider>
        </StyledBox>

    )

};


const StyledBox = styled.section`
  background-color: ${props => props.background ? props.background : '#FFFFFF'};
  position: relative;
  min-height: 120vh;


  &:after {
    content: '';
    background: #F9F9F9;
    height: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    position: absolute;
    @media (max-width: 767px) {
      display: none;
    }
  }

  .swiper-button-disabled {
    opacity: 1 !important;
  }

  .icon {
    position: absolute;
    content: '';
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
  }

  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  .swiper-slide {
    transition: 0.7s all ease;
  }

  .swiper-initialized {
    //padding-left: 100px;
    padding-left: ${props => props.offset ? props.offset + 15 + 'px' : '100px'};
  }

  .testimonial__single {
    height: 100%;

    .row {
      height: 100%;
    }
  }

  .swiper-slide-active {
    height: auto;
    width: 50% !important;

    .testimonial__single__image {
      width: 100%;
      height: 100%;
      position: relative;

    }
  }

  .testimonial__head {
    display: flex;
    justify-content: space-between;

    &__text {
      h2 {
        font-size: 48px;
        font-weight: 300;
        font-family: ${title};
        padding-bottom: 60px;
      }
    }
  }

  .testimonial__single {
    padding: 20px 0 0 0;

    &__image {
      position: relative;
      padding-top: calc(312 / 370 * 100%) !important;

      .react_lightgallery_item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
      }

      &__icon {
        position: absolute;
        top: -20px;
        right: -25px;
      }

      &__play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        svg {
          #Ellipse_396, path {
            transition: 0.7s all ease;
          }
        }
      }

      &.video {
        cursor: pointer;

        &:hover {
          .testimonial__single__image__play {
            svg {
              path {
                fill: white;
              }

              #Ellipse_396 {
                rx: 31px;
                ry: 31.5px;
              }
            }
          }
        }
      }

      img {

      }
    }

    &__content {
      .text {
        color: #32355D;
        line-height: 36px;
        font-weight: 700;
      }

      .description {
        margin: 40px 0 40px 0;
        color: #32355D;
      }

      .name {
        color: #18AEAE;
        line-height: 24px;
        font-weight: 500;

      }

      .designation {
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
      }
    }
  }

  .col-sm-5, .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  @media (max-width: 992px) and (min-width: 768px) {
    .swiper-slide-active {
      height: auto !important;
      width: inherit !important;


      .testimonial__single__image {
        width: 100% !important;
        height: 100% !important;

      }
    }

  }
  @media (max-width: 768px) {
    .testimonial__head {
      flex-direction: row;
      align-items: center;
      padding-bottom: 40px;

      &__text {
        h2 {
          padding-bottom: unset;
          font-size: 32px;
          line-height: 40px;
          text-transform: uppercase;
        }
      }
    }

    .testimonial__single__image__icon {
      position: absolute;
      top: -20px;
      left: 0;
    }

    .testimonial__single {
      padding: 0px 0 0;

      &__content {
        margin-top: 20px;

        .description {
          margin: 20px 0 20px 0;
        }
      }
    }

    .swiper-initialized {
      padding-left: 60px;
      padding-right: 60px;
      height: auto !important;
    }


    .swiper-slide-active {
      height: auto;
      width: inherit !important;

      .testimonial__single__image {
        width: 100%;
        height: 100%;

      }
    }

    min-height: auto;
  }

  .swiper-slide-active {
    .icon {
      display: flex;
    }
  }

  .slider-nav {
    ul {
      display: flex;
    }

    li {
      height: 40px;
      width: 40px;
      background-color: #221F1F;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;

      &:after {
        background-color: ${hover};
      }

      &:nth-of-type(1) {
        margin-right: 20px;
      }

      svg {
        color: #FFF;
        z-index: 2;
      }

      &:hover {
        svg {
          color: #FFFFFF;
        }
      }
    }
  }

`;


export default memo(Gallery);
