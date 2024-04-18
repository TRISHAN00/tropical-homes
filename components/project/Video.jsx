import React, {memo, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row, Modal} from "react-bootstrap";
import {Img} from "../Img";
import 'react-modal-video/css/modal-video.min.css'
import {title} from "../../styles/globalStyleVars";

const Video = ({offset, padding, data}) => {
    // console.log(data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    return (
        <StyledVideo data-scroll-container offset={offset}
                     className={`video_body ${padding ? padding : 'pb-150'} `}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="title">
                            {data?.data?.title && <h2>{data?.data?.title}</h2>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 12}}>
                        <div className="image_video_wrap" onClick={handleShow}>
                            <Img src={data?.images?.[0]?.full_path}/>
                            <div className="play">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                    <g id="Group_13409" data-name="Group 13409" transform="translate(-605 -1935)">
                                        <circle id="Ellipse_395" data-name="Ellipse 395" cx="50" cy="50" r="50"
                                                transform="translate(605 1935)" fill="#fff"/>
                                        <path id="Polygon_1" data-name="Polygon 1" d="M10,0,20,15H0Z"
                                              transform="translate(663.5 1975) rotate(90)"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Modal className={'modal-video'} show={show} onHide={handleClose}>
                <svg onClick={handleClose} className={'close-modal'} xmlns="http://www.w3.org/2000/svg" width="13.426"
                     height="13.423"
                     viewBox="0 0 13.426 13.423">
                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                          d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z"
                          transform="translate(-11.285 -11.289)" fill="#fff"/>
                </svg>
                <Modal.Body>
                    <iframe width="560" height="315"
                            src={`${data?.images?.[0]?.short_title};controls=0&autoplay=1`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen/>
                </Modal.Body>
            </Modal>
        </StyledVideo>

    )
};


const StyledVideo = styled.section`
  position: relative;
  @keyframes zoomIt {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      transform: scale(1.09);
    }
    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }

  }

  .title {
    padding-bottom: 60px;

    h2 {
      font-size: 48px;
      line-height: 48px;
      font-weight: 300;
      text-transform: uppercase;
      font-family: ${title};
    }

    @media (max-width: 767px) {
      padding-bottom: 40px;
      h2 {
        padding-left: 15px;
        padding-right: 15px;
        font-size: 32px;
        line-height: 40px;
      }
    }
  }

  .container {
    padding-left: ${props => props.offset ? props.offset + 15 + 'px' : ''};
    position: relative;
    z-index: 1;
    @media (max-width: 767px) {
      padding-left: 15px !important;
      padding-right: 15px !important;
      .col-md-12 {
        padding: 0;
      }
    }
  }

  &:after {
    content: '';
    background: #F9F9F9;
    height: 50%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    position: absolute;
    @media (max-width: 767px) {
      display: none;
    }
  }


  .image_video_wrap {
    padding-top: calc(620 / 1170 * 100%);
    cursor: pointer;
    overflow: hidden;
    position: relative;

    .play {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      @media (max-width: 767px) {
        height: 50px;
        width: 50px;
        svg {
          height: 50px;
          width: 50px;
        }
      }

      &:before {
        content: '';
        position: absolute;
        height: calc(100% + 30px);
        width: calc(100% + 30px);
        border: none;
        background: rgba(86, 84, 64, 0.5);
        left: -15px;
        top: -15px;
        border-radius: 50%;
        opacity: 0;
        transition: 0.6s all cubic-bezier(0.4, 0, 0, 1);
        z-index: -4;
      }

      &:after {
        content: "";
        z-index: 0;
        //background-color: rgba(30, 92, 149, 0.5);
        overflow: hidden;
        border-radius: 50%;
        transition: 0.6s all cubic-bezier(0.4, 0, 0, 1);
      }

      svg {
        #Ellipse_396, path {
          transition: 0.7s all ease;
        }
      }
    }

    .global-image {
      img {
        transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
        transform: scale(1.01);
      }
    }

    @media (max-width: 767px) {
      padding-top: calc(250 / 375 * 100%);
    }

    &:hover {
      .global-image {
        img {
          transform: scale(1.04);

        }

      }

      .play {
        &:before {
          animation: zoomIt cubic-bezier(0.4, 0, 0, 1) 1;
          animation-duration: 0.9s;
          animation-direction: alternate-reverse;
          animation-iteration-count: infinite;
        }

        &:after {
          opacity: 0;
        }

        svg {
          #Ellipse_396 {
            r: 50;
          }

          path {
            fill: black;
          }
        }

      }
    }

  }
`;


export default memo(Video);







