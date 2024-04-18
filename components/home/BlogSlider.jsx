import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {memo, useEffect, useRef, useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {hover, text, title} from '../../styles/globalStyleVars'
import Title from "../Title";
import Button from "../Button";
import moment from "moment";
import NewsSingle from "../NewsSingle";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

const BlogSliderV1 = ({data}) => {
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    let containerRef = useRef();
    let sliderRef = useRef();
    let [offset, setOffset] = useState(90)

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        updateOffset();
    }, []);


    return (
        <StyledBlog offset={offset} className='blog-slider pt-150 pb-150'>
            <Container ref={containerRef}>
                <Row>
                    <Col sm={12}>
                        <div className="blog-title d-flex flex-wrap justify-content-between">
                            <Title marginSm={'0'} margin={'0 0 0px 0'} text={'News & Events'}/>
                            <div className="blog-button">

                                <div className="slider-nav">
                                    <ul>
                                        <li className="hover go-left">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 16 16" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                            </svg>
                                        </li>
                                        <li className="hover go-right">
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
                        </div>


                    </Col>
                </Row>
            </Container>


            <div className={` fade-up blog-slider__slider-wrap`}>
                <div className="blog-slider__slider-wrap__inner">
                    {data?.list?.length > 0 &&
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            // allowSlideNext={true}
                            // allowSlidePrev={true}
                            allowTouchMove={false}
                            speed={900}
                            // pagination={{
                            //     type: "fraction",
                            // }}
                            navigation={{
                                prevEl: '.blog-slider .go-left',
                                nextEl: '.blog-slider .go-right',
                            }}
                            modules={[Autoplay, Pagination, Navigation]}

                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{

                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },

                            }}

                            // navigation={true} modules={[Navigation]}
                            // onSwiper={(swiper) => console.log(swiper)}

                            ref={sliderRef}>
                            {
                                data?.list?.map((item, index) => {
                                    const thumb = item?.images?.list.find((f) => f?.thumb === "on")
                                    return (
                                        <SwiperSlide key={index}>
                                            <NewsSingle slug={item?.page_data?.slug} img={thumb?.full_path}
                                                        title={item?.page_data?.subtitle}
                                                        day={moment(item?.page_data?.date).format('DD')}
                                                        month={moment(item?.page_data?.date).format('MMM')}
                                                        year={moment(item?.page_data?.date).format('YYYY')}
                                                        shortDesc={item?.page_data?.short_desc}/>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    }
                    <div className="button-desktop" style={{paddingLeft: offset + 15 + 'px'}}>
                        <Button margin={'40px 0 0 0'} src={'/news'}/>
                    </div>
                </div>

                <div className="slider-nav-mobile slider-nav">
                    <Button src={'/news'} text={'View All'}/>

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

        </StyledBlog>
    );
};

const StyledBlog = styled.section`
  background-color: #F9F9F9;

  .blog-title {
    position: relative;
    margin-bottom: 30px;

    p {
      position: absolute;
      top: 0;
      right: 0;

    }

  }


  .blog-button {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
  }

  .slider-nav {
    ul {
      display: flex;
    }

    li {
      height: 50px;
      width: 50px;
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
          color: #FFF;
        }
      }

    }
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: red;
  }

  .swiper-button-next, .swiper-button-prev, .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-initialized {
    //padding-right: 300px;
    //padding-left: 300px;
      // margin-right: ${props => props.offset + 15}px;
    margin-left: ${props => props.offset + 15}px;
    padding-right: ${props => props.offset + 15}px;

    @media (max-width: 767px) {
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  .slider-nav-mobile {
    display: none;
  }

  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .button-desktop {
      display: none;
    }

    .swiper-container {
      margin-left: 0;
      padding-right: 0;
    }

    .blog-slider {
      &__slider-wrap {
        margin-left: 15px;
        margin-right: 15px;

        .slider-nav-mobile {
          margin-top: 40px;

          ul {
            display: flex;
          }

          li {
            height: 50px;
            width: 50px;

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:nth-of-type(1) {
              margin-right: 20px;
            }

            svg {
              color: #FFF;
              z-index: 2;
            }

            &:hover {
              svg {
                color: #FFF;
              }
            }
          }
        }
      }
    }

    .blog-button {
      //margin-bottom: 40px;

      .slider-nav {
        display: none;
      }
    }

    .slider-nav-mobile {
      display: flex;
      justify-content: space-between;
    }

  }

`;
export default memo(BlogSliderV1);
