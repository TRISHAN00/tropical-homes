import React, {useEffect, useRef, useState} from 'react';

import styled from "styled-components";
import {title} from "../../styles/globalStyleVars";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import {Img} from "../Img";
import {Container} from "react-bootstrap";
import Link from "next/link";
import {gsap} from "gsap";

const MyComponent = ({data}) => {

    const [innerWidth, setInnerWidth] = useState(0)
    const [imageIndex, setImagerIndex] = useState(1)
    const [swiperInstance, setSwiperInstance] = useState(null); // State to hold Swiper instance

    const handleIndex = (e) => {
        setImagerIndex(e + 1)
    }

    useEffect(() => {
        setInnerWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth);
        });
    }, []);

    // Activate initial slide once swiper instance is available
    useEffect(() => {
        if (swiperInstance && swiperInstance.activeIndex !== imageIndex - 1) {
            swiperInstance.slideTo(imageIndex - 1, 0); // Activate initial slide
        }
    }, [swiperInstance, imageIndex]);

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [])


    // slider ---
    const swiperRef = useRef(null);
    const swiperRefTwo = useRef(null);

    const handleProgress = (swiper, event) => {
        var interleaveOffset = 0.8;
        for (let i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".global-image").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
        }
    };

    // hand touch move not required this slider
    const handleTouchStart = (swiper) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
        }
    };

    // handle image transition on change
    const handleSetTransition = (swiper, speed) => {
        for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = `${speed}ms`;
            swiper.slides[i]
                .querySelector(".global-image")
                .style.transition = `${speed}ms`;
        }
    };

    // handle pagination
    var pagination_title = ['Financial freedom at the palm of your hands', 'Investing in growth to open new big opportunities', 'Financial freedom at the palm of your hands', 'Investing in growth to open new big opportunities']
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + pagination_title[index] + "</span></div>";
        },
    };
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (event) => {
        console.log(event)
        const newActiveSlideIndex = event.realIndex;
        console.log(newActiveSlideIndex)
        setActiveSlideIndex(newActiveSlideIndex);
        if (swiperRefTwo.current) {
            swiperRefTwo.current.swiper.slideTo(newActiveSlideIndex);
        }

        handleIndex(event.activeIndex)
    };



    // slider ----


    useEffect(() => {
        if (data?.length > 0) {
            const getAllImg = document.querySelectorAll('.banner-animation image');
            if (document.querySelector('.banner-animation .active')) {
                document.querySelector('.banner-animation .active').classList.remove('active')
            }
            getAllImg[imageIndex - 1].classList.add('active')
        }
    }, [imageIndex, data])


    // on hover text add class
    useEffect(() => {
        if (data) {
            const getAlla = document.querySelectorAll('.text-slider a');
            getAlla.forEach(e => {
                e.addEventListener('mouseover', function () {
                    document.querySelector('.home-banner').classList.add('mouse-over')
                });
                e.addEventListener('mouseleave', function () {
                    document.querySelector('.home-banner').classList.remove('mouse-over')
                });
            })
        }

    }, [data])

    return (
        <StyledComponent imageIndex={imageIndex} className={'home-banner'}>
            {/*home-banner.jpg*/}

            <div className="home-banner__slider">
                {data && data?.length > 0 &&
                    <Swiper
                        // key={'1'}
                        // loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={true}
                        speed={1000}
                        onSlideChange={handleSlideChange}
                        onProgress={handleProgress}
                        touchStart={handleTouchStart}
                        onSetTransition={handleSetTransition}
                        watchSlidesProgress={true}
                        centeredSlides={false}
                        pagination={true}
                        modules={
                        [Autoplay,Navigation,Pagination]
                        }
                        navigation={{
                            prevEl: '.home-banner .slider-nav .go-left',
                            nextEl: '.home-banner .slider-nav .go-right',
                        }}
                        className="mySwiper main-swiper"
                    >
                        {data?.length > 0 && data && data?.map(i => {
                            return (
                                <SwiperSlide key={i?.data?.id}>
                                    <div className="home-banner__slider__item">
                                        <Img srcSm={i?.images?.find(f => f?.Mobile === 'on')?.full_path}
                                             src={i?.images?.find(f => f?.Desktop === 'on')?.full_path}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                }
            </div>

            <Container className="text-slider">
                {data && data?.length > 0 &&
                    <Swiper key={2} loop={true}
                            slidesPerView={1}
                            allowSlideNext={true}
                            allowSlidePrev={true}
                            allowTouchMove={false}
                            spaceBetween={0}
                            speed={1000}
                            effect={"fade"}
                            navigation={{
                                prevEl: '.home-banner .slider-nav .go-left',
                                nextEl: '.home-banner .slider-nav .go-right',
                            }}
                            modules={[Autoplay, EffectFade,Navigation]}
                            autoplay={{
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
                    >
                        {data?.length > 0 && data?.map(i => (
                            <SwiperSlide id={i?.data?.id}>
                                <div className="text-slider__content">
                                    <Link href={'/'}><a></a></Link>
                                    <h2>{i?.data?.title}{}</h2>
                                    <p>{i?.data?.subtitle}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }

                <ul className="slider-nav">
                    <li id={'one'} className={'go-left'}><img loading="lazy" src="/images/static/arrow-left.svg"
                                                              alt="left"/></li>
                    <li id={'two'} className={'go-right'}><img loading="lazy" src="/images/static/arrow-right.svg"
                                                               alt="right"/></li>
                </ul>
            </Container>

            <div className="banner-animation">
                {innerWidth > 768 ?
                    // {data && data?.length > 0 &&
                    <>
                        {data && data?.length > 0 &&
                            <svg id="Banner_Animation" data-name="Banner Animation" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 400 600">
                                <defs>
                                    <clipPath id="clip-path">
                                        <path id="Mask"
                                              d="M458,555H0V234.611A238.507,238.507,0,0,1,71.436,64.4a224.939,224.939,0,0,1,315.127,0A238.511,238.511,0,0,1,458,234.611ZM35,520.015H423v-285.4A203.526,203.526,0,0,0,362.04,89.366a189.929,189.929,0,0,0-266.081,0A203.532,203.532,0,0,0,35,234.611Z"
                                              transform="translate(-2149 984)" fill="#1a1818"/>
                                    </clipPath>
                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%"
                                             viewBox="0 0 500 500">
                                        {data?.length > 0 && data?.map(i => (
                                            <image id={i?.data?.id} width="500" height="500"
                                                   xlinkHref={i?.images?.find(f => f?.Desktop === 'on')?.full_path}/>
                                        ))}
                                    </pattern>
                                </defs>
                                <path id="Mask-2" data-name="Mask"
                                      d="M449.746,545H0V230.383A234.21,234.21,0,0,1,70.149,63.244a220.886,220.886,0,0,1,309.449,0,234.214,234.214,0,0,1,70.148,167.139ZM34.369,510.645H415.376V230.383a199.859,199.859,0,0,0-59.86-142.627,186.507,186.507,0,0,0-261.287,0A199.865,199.865,0,0,0,34.369,230.383Z"
                                      transform="translate(4 5)" fill="#fff"
                                      style={{mixBlendMode: "overlay", isolation: "isolate"}}/>
                                <g id="Group_17773" data-name="Group 17773" transform="translate(3279 -938)">
                                    <g id="Mask_Group_62" data-name="Mask Group 62" transform="translate(-1130 -46)"
                                       clip-path="url(#clip-path)">
                                        <g id="Group_17772" data-name="Group 17772">
                                            <rect id="animated_157072129248672758"
                                                  data-name="animated 157072129248672758"
                                                  width="2574"
                                                  height="1286" transform="translate(-3207 596)" fill="url(#pattern)"/>
                                            <rect id="Mask-3" data-name="Mask" width="1366" height="768"
                                                  transform="translate(-2603 877)" opacity="0.2"/>
                                            <rect id="Dark_Tint" data-name="Dark Tint" width="1366" height="768"
                                                  transform="translate(-2603 877)" opacity="0.4"/>
                                            <path id="Overlay"
                                                  d="M458,555H0V234.611A238.507,238.507,0,0,1,71.436,64.4a224.939,224.939,0,0,1,315.127,0A238.512,238.512,0,0,1,458,234.611ZM35,520.015H423v-285.4A203.526,203.526,0,0,0,362.04,89.366a189.929,189.929,0,0,0-266.081,0A203.532,203.532,0,0,0,35,234.611Z"
                                                  transform="translate(-2149 984)" fill="#fff"
                                                  style={{mixBlendMode: "overlay", isolation: "isolate"}}
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        }
                    </>

                    // }:
                    :
                    <>


                        {data && data?.length > 0 &&

                            <>
                                <svg
                                    width="250" height="302.949" viewBox="0 0 250 302.949">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <path id="Mask"
                                                  d="M250,302.949H0V128.063A130.19,130.19,0,0,1,38.994,35.156a122.784,122.784,0,0,1,172.013,0A130.193,130.193,0,0,1,250,128.063Zm-230.9-19.1H230.9V128.063a111.1,111.1,0,0,0-33.274-79.282,103.674,103.674,0,0,0-145.241,0A111.1,111.1,0,0,0,19.1,128.063Z"
                                                  fill="#1a1818"/>
                                        </clipPath>
                                    </defs>
                                    <g id="Group_21282" data-name="Group 21282" transform="translate(-414.5 -56)">
                                        <g id="Group_20616" data-name="Group 20616" transform="translate(414.5 56)">
                                            <path id="Mask-2" data-name="Mask"
                                                  d="M240.536,291.481H0V123.215A125.262,125.262,0,0,1,37.518,33.825a118.136,118.136,0,0,1,165.5,0,125.264,125.264,0,0,1,37.517,89.391ZM18.382,273.107H222.155V123.215A106.89,106.89,0,0,0,190.14,46.934a99.749,99.749,0,0,0-139.743,0,106.893,106.893,0,0,0-32.015,76.281Z"
                                                  transform="translate(4.584 5.734)" fill="#fff"
                                                  style={{mixBlendMode: "overlay", isolation: "isolate"}}/>
                                            <g id="Mask_Group_62" data-name="Mask Group 62" transform="translate(0 0)"
                                               clip-path="url(#clip-path)">
                                                <g id="Group_17772" data-name="Group 17772"
                                                   transform="translate(-577.513 -265.475)">

                                                    {data?.length > 0 && data?.map(i => (
                                                        <image key={i?.data?.id} id="animated_157072129248672758"
                                                               data-name="animated 157072129248672758" width="1405.028"
                                                               height="702.514"
                                                               xlinkHref={i?.images?.find(f => f?.Desktop === 'on')?.full_path}/>
                                                    ))}


                                                    <rect id="Mask-3" data-name="Mask" width="745.636" height="525.477"
                                                          transform="translate(329.696 192.264)" opacity="0.2"/>
                                                    <rect id="Dark_Tint" data-name="Dark Tint" width="745.636"
                                                          height="525.477" transform="translate(329.696 192.264)"
                                                          opacity="0.4"/>
                                                    <path id="Overlay"
                                                          d="M250,302.949H0V128.063A130.19,130.19,0,0,1,38.994,35.156a122.784,122.784,0,0,1,172.013,0A130.193,130.193,0,0,1,250,128.063Zm-230.9-19.1H230.9V128.063a111.1,111.1,0,0,0-33.274-79.282,103.674,103.674,0,0,0-145.241,0A111.1,111.1,0,0,0,19.1,128.063Z"
                                                          transform="translate(577.513 265.475)" fill="#fff"
                                                          style={{mixBlendMode: "overlay", isolation: "isolate"}}/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                            </>

                        }
                    </>
                }

            </div>

            <div className="go-down">
                <Link href={'#tallest-building'}><img src="/images/static/down.svg" alt=""/></Link>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #000;


    .home-banner__slider {
        height: 100vh;
        width: 100vw;
        position: relative;

        .swiper {
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 5;
            overflow: hidden;
        }

        .swiper-slide {
            overflow: hidden;

        }

        &__item {
            overflow: hidden;
            transform: scale(1.3);
            width: 100%;
            height: 100%;
            transition: all 2.5s ease;

            img {
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 5;
                filter: brightness(70%);
                transition: all .6s cubic-bezier(0.4, 0, 0, 1);
                top: 0;
                left: 0;
                object-fit: cover;
                right: 0;
                bottom: 0;

            }
        }
    }


    .banner-animation {
        height: 580px;
        width: 600px;
        position: absolute;
        z-index: 9;
        left: 0px;
        right: 50px;
        margin: auto;
        bottom: 0;
        top: 60px;

        svg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9;
            margin: auto;
            transition: all .6s cubic-bezier(0.4, 0, 0, 1);

            image {
                object-fit: cover;
                transform: translateX(-50px);
                transition: transform .6s ease, visibility 0s, opaicty .6s ease;
                transform-origin: center;
                visibility: hidden;

                &:nth-of-type(${p => p.imageIndex}) {
                    visibility: visible;
                }

                &.active {
                    transform: none;
                }
            }

            #Mask-2 {
                fill: #ffffff26
            }
        }
    }


    .text-slider {
        position: absolute;
        height: 80%;
        z-index: 50;
        inset: 70px 0 0 0;
        margin: auto;

        .swiper {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }

        &__content {
            position: absolute;
            height: fit-content;
            width: fit-content;
            inset: 0;
            margin: auto;
            z-index: 9;
            text-align: center;

            a {
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 22;
                left: 0;
                top: 0;

            }

            h2 {
                font-size: 80px;
                line-height: 80px;
                color: #ffffff;
                text-transform: uppercase;
                font-family: ${title};
                font-weight: 300;
                margin: auto auto 20px auto;
                opacity: 0;
                transform: translateY(30px);
                transition: .5s ease;
                transition-delay: 0s;
                width: calc(100% - 80px);

            }

            p {
                font-size: 24px;
                line-height: 32px;
                color: #ffffff;
                opacity: 0;
                transform: translateY(30px);
                transition: .5s ease;
                transition-delay: 0s;
                text-transform: uppercase;
            }
        }
    }

    .swiper-pagination {
        bottom: 35px;
    }

    .swiper-pagination-bullet {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: transparent;
        opacity: 1;
        border: 1px solid transparent;
        position: relative;

        &.swiper-pagination-bullet-active {
            border-color: #FFF;
        }

        &:after {
            content: '';
            position: absolute;
            height: 6px;
            width: 6px;
            background-color: #fff;
            inset: 0;
            margin: auto;
            border-radius: 50%;
        }
    }

    .swiper-slide-active {
        .home-banner__slider__item {
            transform: scale(1);
        }

        .text-slider__content {
            h2 {
                opacity: 1;
                transform: none;
                transition-delay: .6s;
            }

            p {
                opacity: 1;
                transform: none;
                transition-delay: .8s;
            }
        }
    }

    //on hover animation

    &.mouse-over {
        .home-banner__slider img {
            transform: scale(1.05);
            transition: .6s cubic-bezier(0.4, 0, 0, 1) !important;
        }


        .banner-animation {
            svg {
                opacity: .6;

                image {
                    transform: scale(.80);

                }
            }
        }
    }

    .slider-nav {
        li {
            position: absolute;
            top: 0;
            bottom: 0px;
            margin: auto;


            &:nth-of-type(2) {
                right: 15px;
            }
        }
    }

    .go-down {
        position: absolute;
        left: 30px;
        bottom: 30px;
        z-index: 99;
        animation: bouncing .7s;
        animation-direction: alternate;
        animation-iteration-count: infinite;

        img {
            height: 40px;
            width: 40px;
        }
    }

    @keyframes bouncing {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, 10px, 0);
        }
    }

    @media (max-width: 768px) {
        .banner-animation {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 65%;
                //height: 350px;
                position: relative;
                margin: 0;
            }
        }
    }


    @media (max-width: 650px) {
        .text-slider__content {
            width: calc(100% - 30px);
        }

    }
    @media (max-width: 615px) {
        .text-slider__content {
            h2 {
                font-size: 35px;
                line-height: 35px;
            }

            p {
                font-size: 20px;
                line-height: 25px;
            }
        }

        .go-down {
            left: 15px;
        }

    }


    .swiper-slide-active, .swiper-slide-visible {
        .global-image {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .slide-inner {
            &__info {
                transition-delay: 0.3s;
                opacity: 1;
                transform: translateX(0px) !important;

                .dc-btn {
                    transition-delay: 0.4s;
                    opacity: 1;
                    transform: translateX(0px) !important;
                }
            }

        }
    }
`;

export default MyComponent;
