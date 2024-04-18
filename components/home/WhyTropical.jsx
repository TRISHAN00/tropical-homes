import React, {memo, useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import Title from "../Title";
import {gsap} from "gsap";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    const behind = data?.images?.list?.find((f) => f?.Behind === "on");
    const Top = data?.images?.list?.find((f) => f?.Top === "on");

    const [offset, setOffset] = useState(15);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setOffset(document.querySelector('.container')?.offsetLeft + 15 || 15);
        };

        // Initial window width and offset
        setWindowWidth(window.innerWidth);
        setOffset(document.querySelector('.container')?.offsetLeft + 15 || 15);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 991) {
            gsap.to('.float-img', {
                y: '-60%',
                duration: .4,
                scrollTrigger: {
                    scrub: 2
                }
            });
        }
    }, [windowWidth]); // Update the animation when windowWidth changes

    return (
        <>
            <StyledTitle>
                <Container>
                    <Title color={'#FFF'} text={"Elevate your lifestyle\n" +
                        "with our luxury offerings"}/>
                </Container>
            </StyledTitle>
            <StyledComponent offset={offset} className={'why-tropical pb-150'}>
                <Container fluid className={'p-0'}>
                    <Row>
                        <Col md={5} sm={12} className={'why-tropical__left'}>
                            <div className="why-tropical__left__img parallax-img">
                                {windowWidth > 767 ? <Img src={behind?.full_path}/> : <Img src={Top?.full_path}/>}
                            </div>
                            <img className={'float-img'} src={Top?.full_path} alt={'tropical'}/>
                        </Col>

                        <Col className={'why-tropical__right'} md={{span: 7}}
                             style={{paddingRight: offset + 15 + 'px'}}>
                            <Title margin={'0 0 50px 0'} text={data?.section_data?.subtitle}/>
                            <h4>{reactHtmlParser(data?.section_data?.short_desc)}</h4>
                            <p>{reactHtmlParser(data?.section_data?.description)}</p>
                        </Col>
                    </Row>
                </Container>
            </StyledComponent>
        </>
    );
};

const StyledTitle = styled.section`
  background-color: #1D3130;
  margin-top: -2px;

  .title {
    margin: 0;
    @media (max-width: 600px) {
      padding-bottom: 70px;
    }
  }
`;

const StyledComponent = styled.section`
  position: relative;
    margin-top: -2px;
  &:before {
    content: '';
    position: absolute;
    height: 140px;
    width: 100%;
    //top: -2px;
    left: 0;
    background-color: #1D3130;
    z-index: 4;
  }

  &:after {
    content: '';
    position: absolute;
    height: 300px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #F9F9F9;
    z-index: 1;
  }

  .why-tropical__left {
    padding-right: 180px;
    position: relative;
    padding-top: 300px;
    z-index: 4;

    &:before {
      content: '';
      position: absolute;
      height: 50%;
      width: 80%;
      top: 0;
      left: 0;
      background-color: #1D3130;
    }

    &__img {
      padding-top: calc(620 / 420 * 100%);
      position: relative;
      @media (max-width: 600px) {
        padding-top: calc(450 / 375 * 100%);
      }
    }

    .float-img {
      position: absolute;
      object-fit: contain;
      left: ${props => props.offset + 15}px;
      top: 400px;
      max-width: 70%;
      right: 0;
    }
  }

  h4 {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .why-tropical__right {
    padding-top: 200px;
    padding-left: 120px;
    background-color: #FFFFFF;
    z-index: 3;
    height: fit-content;
    padding-bottom: 50px;
  }

  @media (min-width: 1600px) {
    .why-tropical__left .float-img {
      top: 45%;
      left: auto;
      right: 100px;
    }
  }
  @media (min-width: 2400px) {
    .why-tropical__left .float-img {
      top: 30%;
      left: auto;
      right: 100px;
    }
  }

  @media (max-width: 991px) {
    background-color: #F9F9F9;
    overflow: hidden;
    .float-img {
      display: none;
    }

    &:after {
      display: none;
    }

    &:before {
      display: none;
    }

    .why-tropical__left {
      padding-right: 0;
      padding-top: 130px;

      &:before {
        display: none;
      }
    }

    .why-tropical__right {
      background-color: #F9F9F9;
      padding-left: 40px;
      padding-top: 130px;
    }
  }

  @media (max-width: 767px) {
    .why-tropical__left {
      padding-top: 0;
    }

    .why-tropical__right {
      padding-top: 30px;
      padding-left: 30px;
      padding-bottom: 0;

      h4 {
        margin-bottom: 30px;
      }

      .dc-btn {
        margin-top: 30px;
      }
    }
  }


`;

export default MyComponent;
