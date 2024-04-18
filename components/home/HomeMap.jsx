import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import GoogleMapsMarkers from "./GoogleMapsMarkers";

const MyComponent = ({offset}) => {
    return (
        <StyledComponent offset={offset} >
            <div className="map">
                <Container fluid className={'p-0'}>
                    <Row>
                        <Col className={'map__wrap p-0'} md={8}>
                            <div className="map__wrap__img">
                                <Img src={'/images/dynamic/home/home-map-images.jpg'}/>
                            </div>
                            <div className="map__wrap__box">
                                <div className="map__wrap__box__inner">
                                    <div className="map__wrap__box__inner__text">
                                        <p>Residential <div className="close-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.438" height="11.438" viewBox="0 0 11.438 11.438">
                                                <g id="Group_17590" data-name="Group 17590" transform="translate(-242.222 -22.222)">
                                                    <line id="Line_370" data-name="Line 370" x2="14.175" transform="translate(242.929 22.929) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                    <line id="Line_371" data-name="Line 371" x2="14.175" transform="translate(252.952 22.929) rotate(135)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                </g>
                                            </svg>

                                        </div></p>
                                        <h6>Tropical Cantt View</h6>
                                        <p>Maticata, Dhaka Cantonment</p>
                                    </div>
                                    <a className="map__wrap__box__inner__arrow">
                                        <p>Click</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9.49" height="17.823"
                                             viewBox="0 0 9.49 17.823">
                                            <g id="Group_17588" data-name="Group 17588"
                                               transform="translate(1.412 1.412)">
                                                <line id="Line_4" data-name="Line 4" x1="6.667" y1="7.5"
                                                      transform="translate(0)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="2"/>
                                                <line id="Line_5" data-name="Line 5" x1="6.667" y2="7.5"
                                                      transform="translate(0 7.5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="2"/>
                                            </g>
                                        </svg>
                                        </a>
                                </div>
                            </div>
                            <GoogleMapsMarkers/>
                        </Col>
                        <Col className={'p-0'} md={4}>
                            <div className="map__text">
                                <h2>We don’t just create a homes, we craft the perfect locations as well</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .map {
    &__wrap {
      position: relative;

      &__box {
        position: absolute;
        content: '';
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &__inner {
          background-color: #1D3130;
          padding: 20px;
          width: 290px;
          height: 161px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &__text {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          &__arrow {
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: pointer;
            width: fit-content;
          }

          h6, p, a {
            color: #fff;
          }

          h6 {
            font-size: 18px;
            font-weight: 400;
            line-height: 18px;
            font-family: ${title};
            text-transform: uppercase;
          }

          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;

            &:first-child {
              text-transform: uppercase;
              display: flex;
              justify-content: space-between;
              align-items: center;

            }
          }

          .icon-icon {
            cursor: pointer;
          }
        }
      }

      &__img {
        position: relative;
        padding-top: calc(660 / 898 * 100%);
      }
    }

    &__text {
      background-color: #1D3130;
      height: 100%;
      display: flex;
      align-items: center;

      h2 {
        color: #FFFFFF;
        font-size: 48px;
        font-weight: 300;
        font-family: ${title};
        padding-right: ${props => props.offset ? props.offset + 'px' : ""};
        padding-left: 70px;
      }
    }
  }
`;

export default MyComponent;
