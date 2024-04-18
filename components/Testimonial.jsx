import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "./Img";
import Title from "./Title";
import Lines from "./Lines";
import {hover, text, title} from "../styles/globalStyleVars";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";


const MyComponent = ({data}) => {
    const background = data?.images?.list?.find((f) => f?.background === "on");
    return (
        <StyledComponent className={'testimonial pt-100'}>
            <Lines/>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Title margin={'0 0 40px 0 '} width={'100%'} center color={'#1D3130'} text={'Testimonials'}/>
                    </Col>
                </Row>
            </Container>

            <div className="testimonial__bg-wrap">
                <Img src={background?.full_path}/>
                <Container>
                    <Row className={'pt-150 pb-150'}>
                        <Col lg={12} xl={{span: 8, offset: 4}} className={'p-0'}>
                            <Row>
                                <Col sm={6} md={6}>
                                    <div className="testimonial__img__slider">
                                        <Swiper loop={false}
                                                slidesPerView={1}
                                                allowSlideNext={true}
                                                allowSlidePrev={true}
                                                allowTouchMove={false}
                                                speed={500}
                                                navigation={{
                                                    prevEl: '.testimonial .go-left',
                                                    nextEl: '.testimonial .go-right',
                                                }}
                                                modules={[Autoplay, Pagination, Navigation]}

                                                autoplay={{
                                                    delay: 5000,
                                                    disableOnInteraction: false,
                                                }}
                                        >
                                            {
                                                data?.posts?.list?.map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="testimonial__img__slider__inner">
                                                                <Img src={item?.images?.[0]?.full_path}/>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>
                                    </div>
                                </Col>

                                <Col sm={6} md={{span: 5, offset: 1}} className={'pl-0'}
                                     style={{position: 'relative'}}>
                                    <div className="testimonial__text__slider">
                                        <Swiper loop={false}
                                                slidesPerView={1}
                                                allowSlideNext={true}
                                                allowSlidePrev={true}
                                                allowTouchMove={false}
                                                speed={500}
                                            // pagination={{
                                            //     type: "fraction",
                                            // }}
                                                navigation={{
                                                    prevEl: '.testimonial .go-left',
                                                    nextEl: '.testimonial .go-right',
                                                }}
                                                modules={[Autoplay, Pagination, Navigation]}

                                                autoplay={{
                                                    delay: 5000,
                                                    disableOnInteraction: false,
                                                }}
                                        >
                                            {
                                                data?.posts?.list?.map((item, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className="testimonial__text__slider__inner">
                                                                <p>{item?.data?.description}</p>
                                                                <h4>{item?.data?.title}</h4>
                                                                <h5>{item?.data?.subtitle}</h5>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper>
                                    </div>


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
                        </Col>
                    </Row>
                </Container>
            </div>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;

  .testimonial__bg-wrap {
    position: relative;
  }

  .testimonial__img__slider {
    position: relative;
    height: fit-content;
    width: 100%;
    padding: 10px;

    &__inner {
      padding-top: calc(545 / 450 * 100%);
      position: relative;
      border-radius: 215px 215px 0 0;
      overflow: hidden;

      img {
        border-radius: 215px 215px 0 0;
      }

      &:after {
        position: absolute;
        height: 100%;
        width: 100%;
        border: 1px solid ${hover};
        content: '';
        top: 0;
        border-radius: 215px 215px 0 0;
      }

      .global-image {
        left: 8px;
        right: 8px;
        bottom: 8px;
        top: 8px;
        height: auto;
        width: auto;
        margin: auto;
        overflow: hidden;
      }

    }
  }

  .testimonial__text__slider {
    padding-bottom: 60px;
    padding-top: 20px;

    h4 {
      font-size: 24px;
      line-height: 30px;
      //font-weight: 300;
      font-family: ${title};
      margin-top: 50px;
      margin-bottom: 8px;
    }

    h5 {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .slider-nav {
    position: absolute;
    bottom: 8px;

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

  @media (min-width: 1600px) {
    .testimonial__img__slider__inner:after {
      border-radius: 245px 247px 0px 0px;
    }

    .testimonial__img__slider__inner img {
      border-radius: 245px 247px 0px 0px;
    }
  }

  @media (max-width: 576px) {
    .testimonial__img__slider {
      padding: 15px;

      &__inner {
        &:after {
          border-radius: 265px 265px 0px 0px;
        }

        img {
          border-radius: 265px 265px 0px 0px;
        }
      }
    }

    .testimonial__text__slider {
      padding-top: 10px;
      padding-bottom: 75px;

      h4 {
        margin-top: 30px;
      }

      &__inner {
        padding-left: 30px;
        padding-right: 15px;
      }
    }

    .slider-nav {
      padding-left: 30px;
    }

  }



`;

export default memo(MyComponent);
