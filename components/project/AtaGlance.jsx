import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import {title} from "../../styles/globalStyleVars";

const AtGlance = ({offset, data, windowWidth}) => {
    const images = data?.images?.[0];
    const table = data?.data?.description

    return (
        <StyledAtGlance offset={offset} id={'glance'} className={'at-glance'}>
            <Container fluid className={'p-0'}>
                <Row>

                    <Col md={8} className='at-glance__content'>
                        {
                            windowWidth > 767 ? <Img src={'/images/dynamic/at-a-glance-bg.jpg'}/> :
                                <Img src={'/images/dynamic/mb-at-a-glance.jpg'}/>
                        }

                        <div className='at-glance__content__title'>
                            <h2 className={'split-up'}>At a glance</h2>
                            <div>
                                {reactHtmlParser(table)}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='at-glance__image p-0'>
                        <div className="">
                            <div className="at-glance__img">
                                <Img src={images?.full_path}/>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </StyledAtGlance>
    );
};
const StyledAtGlance = styled.section`
  overflow: hidden;

  .at-glance {
    &__img {
      position: relative;
      padding-top: calc(740 / 500 * 100%);
    }

    &__content {
      color: #252E47;
      display: flex;
      align-items: center;


      &__title {
        width: 100%;
        padding-left: ${props => props.offset ? props.offset + "px" : "0"};
        z-index: 1;


        h2 {
          color: #FFFFFF;
          margin-bottom: 40px;
          font-size: 48px;
          font-weight: 300;
          line-height: 48px;
          font-family: ${title};
          text-transform: uppercase;
        }


        table {
          tr {
            display: flex;
            width: 100%;
            //border-bottom: 1px solid rgb(177 176 176 / 60%);
            padding-top: 20px;
            padding-bottom: 20px;
            //justify-content: space-between;

            &:first-child {
              padding-top: 0;
            }

            &:last-child {
              td {
                padding-bottom: 0;
                font-size: 12px;
                line-height: 18px;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }

          &:last-child {
            margin-bottom: 0;

          }

          td {
            font-size: 12px;
            line-height: 18px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);

            h4 {
              font-size: 24px;
              font-weight: 300;
              line-height: 30px;
              color: #FFFFFF;
              font-family: ${title};
            }

            &:first-child {
              font-weight: 400;
              flex: 0 0 40%;
              padding-left: 0px;
              color: rgba(255, 255, 255, 0.5);
            }

            &:last-child {
              flex-basis: 60%;
              padding-left: 100px;
              @media (max-width: 991px) {
                padding-left: 25px;
              }
            }

          }
        }
      }
    }
  }


  @media (max-width: 767px) {
    .row {
      flex-direction: column-reverse;
    }

    table, tbody, tr, td {
      display: block !important;
      width: 100% !important;
    }

    tr {
      padding: 0 !important;

      td {
        padding-left: 0 !important;
        margin-bottom: 20px !important;
      }

      &:nth-last-of-type(1) td {
        &:nth-last-of-type(1) {
          margin-bottom: 0 !important;
        }
      }
    }


    .at-glance {


      &__img {
        padding-right: 15px !important;
        padding-top: calc(560 / 375 * 100%);

      }

      &__content {
        margin-top: unset;
        padding-left: 15px !important;
        padding-top: 80px;
        padding-bottom: 80px;

        &__title {
          padding-left: 15px;
          padding-right: 15px;

          h2 {
            font-size: 32px;
            line-height: 40px;
            text-transform: uppercase;
          }
        }
      }
    }
  }

`;
export default React.memo(AtGlance);
