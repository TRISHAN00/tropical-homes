import React, {memo, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import ProjectSingle from "../ProjectSingle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper";
import Select, {components} from "react-select";
import {text} from "../../styles/globalStyleVars";
import Link from "next/link";


const MyComponent = ({title, data, findData, Location}) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    // dropdown style
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#FFF' : 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? '#00A651' : '#]212158',
            margin: 0,
            cursor: 'pointer'
        }),
        menu: (provided, state) => ({
            ...provided,
            color: 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)',
            margin: 0,

        }),
        menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#000' : '#FFF',
            borderRadius: 0,
            cursor: 'pointer'
        }),
    };

    // drop down indecator
    const DropdownIndicator = props => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    {props.selectProps.menuIsOpen ?
                        <img src="/images/static/caret-up.svg" alt="down"/>
                        :
                        <img src="/images/static/caret-down.svg" alt="down"/>
                    }

                </components.DropdownIndicator>
            )
        );
    };

    // options
    const status = [
        {value: 'ready', label: 'Ready'},
        {value: 'ongoing', label: 'Ongoing'},
        {value: 'upcoming', label: 'Upcoming'},
        {value: 'completed', label: 'Completed'},

    ];
    const type = [
        {value: 'residential', label: 'Residential'},
        {value: 'commercial', label: 'Commercial'},
        {value: 'condominium ', label: 'Condominium '},
    ];
    const location = Location?.map(e => (
        {value: e?.location.toLowerCase(), label: e?.location}
    ))

    return (
        <StyledComponent className={'feature-slider pt-150 pb-150'}>
            <img loading={"lazy"} className={'bg-shadow'} src="/images/static/shadow.svg" alt=""/>
            <Container>
                <Row>
                    <Col sm={10}>
                        <Title margin={'0 0 60px 0'} text={title?.section_data?.subtitle}
                               color={'#FFFFFF'}/>
                    </Col>
                </Row>

                <div className="feature-slider__init">
                    <ul className="slider-nav">
                        <li className={'go-left'}><img src="/images/static/arrow-left.svg" alt="left"/></li>
                        <li className={'go-right'}><img src="/images/static/arrow-right.svg" alt="right"/></li>
                    </ul>
                    {data?.list?.length > 0 &&
                        <Swiper loop={false}
                                spaceBetween={30}
                                slidesPerView={1}
                                allowSlideNext={true}
                                allowSlidePrev={true}
                                allowTouchMove={false}
                                speed={600}
                            // pagination={{
                            //     type: "fraction",
                            // }}
                                navigation={{
                                    prevEl: '.feature-slider .go-left',
                                    nextEl: '.feature-slider .go-right',
                                }}
                                modules={[Autoplay, Pagination, Navigation]}

                                breakpoints={{

                                    900: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    700: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },

                                    550: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },

                                }}
                            // autoplay={false}

                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                        >
                            {
                                data?.list?.map((item, index) => {
                                    const thumb = item?.images?.list.find((f) => f?.thumb === "on")
                                    return (
                                        <SwiperSlide key={index}>
                                            <ProjectSingle slug={item?.product_data?.slug}
                                                           address={item?.product_data?.location}
                                                           title={item?.product_data?.title}
                                                           img={thumb?.full_path ? thumb?.full_path : '/images/dynamic/project1.jpg'}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    }
                </div>


                <Row className={'project-search pt-150'}>

                    <Col sm={12}>
                        <Title margin={'0 0 30px 0 '} marginSm={'0 0 30px 0'} color={'#FFF'}
                               text={findData?.section_data?.subtitle ? findData?.section_data?.subtitle : 'Find a Project'}/>
                    </Col>

                    <Col sm={6} md={3}>
                        <Select components={{DropdownIndicator}}
                                styles={customStyles}
                                classNamePrefix={'custom'} className='select-here '
                                placeholder={'Project Type'}
                                onChange={(selectedOption) => setSelectedType(selectedOption.value)}
                                options={type}/>
                    </Col>

                    <Col sm={6} md={3}>
                        <Select components={{DropdownIndicator}}
                                styles={customStyles}
                                classNamePrefix={'custom'} className='select-here '
                                placeholder={'Project Status'}
                                onChange={(selectedOption) => setSelectedStatus(selectedOption.value)}
                                options={status}/>
                    </Col>

                    <Col sm={6} md={3}>
                        <Select components={{DropdownIndicator}}
                                styles={customStyles}
                                classNamePrefix={'custom'} className='select-here '
                                placeholder={'Project Location'}
                                onChange={(selectedOption) => setSelectedLocation(selectedOption.value)}
                                options={location}/>
                    </Col>
                    <Col sm={6} md={3}>
                        <Link href={`/projects?status=${selectedStatus ? selectedStatus : ''}&type=${selectedType ? selectedType : ''}&location=${selectedLocation ? selectedLocation : ''}`}>
                            <a className={'hover'} >
                                <span>Search</span>
                                <img src="/images/static/search-white.svg" alt=""/>
                            </a>
                        </Link>

                    </Col>


                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #1D3130;
  position: relative;
  overflow: hidden;
    will-change: transform;
    margin-top: -2px;
  .feature-slider__init {
    width: 100%;
    position: relative;
  }

  .slider-nav {
    .go-left {
      position: absolute;
      top: 0;
      bottom: 80px;
      margin: auto;
      left: -60px;
    }

    .go-right {
      position: absolute;
      top: 0;
      bottom: 80px;
      margin: auto;
      right: -60px;
    }
  }

  .bg-shadow {
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    opacity: .6;
  }

  @media (max-width: 991px) {
    .slider-nav {
      .go-left {
        left: -45px;
      }

      .go-right {
        right: -45px;
      }
    }

    .bg-shadow {
      height: 100%;
    }
  }
  @media (max-width: 767px) {
    .slider-nav {
      .go-left {
        left: 0px;
        top: auto;
        bottom: -70px;
      }

      .go-right {
        left: 60px;
        right: auto;
        top: auto;
        bottom: -70px;
      }
    }
  }

  //caret
  .custom__control {
    background-color: transparent;
    border: 1px solid #D0DEDE !important;
    box-shadow: none;
    outline: none !important;
    cursor: pointer;
    margin-bottom: 20px;
    border-radius: 50px!important;
    height: 50px;
    padding: 0 30px;

    svg line {
      stroke: #FFF
    }

    .custom__single-value {
      color: #FFF;
      font-size: 15px;
      line-height: 20px;
    }

    .custom__placeholder {

      color: #FFF;
      font-size: 16px;
      line-height: 24px;
    }

    .custom__value-container {
      padding-left: 0;
    }

    &--is-focused {

    }
  }

  .custom__menu {
    z-index: 9;
  }

  .css-t3ipsp-control:hover {
    border-color: #FFF;
  }

  .custom__indicator-separator {
    display: none;
  }

  .custom__indicator {
    padding-right: 0;
  }

  .project-search {
    a {
      border: 1px solid #FFF;
      border-radius: 50px;
      width: 100%;
      height: 50px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;

      img {
        margin-left: 10px;
        position: relative;
        z-index: 2;
        transition: .3s ease;
      }

      &.hover:after {
        background-color: #fff;
      }

      &:hover {
        color: ${text} !important;

        img {
          filter: invert(100%) sepia(0%) saturate(7468%) hue-rotate(132deg) brightness(98%) contrast(106%);
        }
      }
    }
  }

  @media (max-width: 991px) {
    .project-search {
      .col-md-3 {
        min-width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    .project-search {
      margin-top: 80px;
    }
  }
`;


export default MyComponent;