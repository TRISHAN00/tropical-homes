import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({offset, data}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const address = data?.posts?.list?.find((f) => f?.data?.slug === "address");
    const telephone = data?.posts?.list?.find((f) => f?.data?.slug === "telephone");
    const email = data?.posts?.list?.find((f) => f?.data?.slug === "email");
    const desktop = data?.images?.list?.find((f) => f?.Desktop === "on");
    const mobile = data?.images?.list?.find((f) => f?.Mobile === "on");


    console.log('address', address)
    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <StyledComponent offset={offset} className={'pt-150 pb-150'}>
            <div className="contact-info">
                <Container fluid className={'p-0'}>
                    <Row>
                        <Col sm={5}>
                            <div className="contact-info__text">
                                {data?.section_data?.subtitle &&
                                    <h2 className={'split-up'}>{data?.section_data?.subtitle}</h2>}
                            </div>
                            <div className="contact-info__list">
                                <div className="contact-info__list__item">
                                    <div className="icon">
                                        <img loading={"lazy"} src="/images/static/location.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>{address?.data?.title}</h4>
                                        <a target={"_blank"}
                                           href={address?.data?.description}>{address?.data?.short_desc}</a>
                                        {/*{reactHtmlParser(address?.data?.description)}*/}
                                    </div>
                                </div>
                                <div className="contact-info__list__item">
                                    <div className="icon">
                                        <img loading={"lazy"} src="/images/static/phone.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>{telephone?.data?.title}</h4>
                                        {reactHtmlParser(telephone?.data?.description)}
                                    </div>
                                </div>
                                <div className="contact-info__list__item">
                                    <div className="icon">
                                        <img loading={"lazy"} src="/images/static/email.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <h4>{email?.data?.title}</h4>
                                        {reactHtmlParser(email?.data?.description)}

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={{span: 6, offset: 1}}>
                            <div className="contact-info__img">
                                {windowWidth > 767 ? (
                                    <Img src={desktop?.full_path}/>
                                ) : (
                                    <Img src={mobile?.full_path}/>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #F9F9F9;

  .contact-info {
    &__text {
      padding-left: ${props => props.offset ? props.offset + "px" : "0"};

      h2 {
        font-size: 48px;
        font-weight: 300;
        line-height: 60px;
        color: #1D3130;
        font-family: ${title};
        padding-bottom: 60px;
        //padding-right: 100px;
      }
    }

    &__list {
      padding-left: ${props => props.offset ? props.offset + "px" : "0"};
      display: flex;
      flex-direction: column;
      gap: 30px;

      &__item {
        padding: 30px 60px 30px 30px;
        background-color: #FFFFFF;
        display: flex;
        gap: 20px;

        .icon {
          width: 20px;
        }

        .info {

          h4 {
            font-family: ${title};
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 400;
            line-height: 30px;
            padding-bottom: 20px;
          }

          a {
            display: inline-block;
          }

          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #1D3130;
          }
        }
      }
    }

    &__img {
      position: relative;
      padding-top: calc(768 / 668 * 100%);
    }
  }

  @media (max-width: 767px) {
    padding-bottom: unset !important;
    .contact-info {
      &__text {
        padding-left: 15px;
        padding-right: 15px;

        h2 {
          font-size: 32px !important;
          line-height: 40px !important;
          padding-right: unset;
          padding-bottom: 40px;
        }
      }

      &__list {
        padding-left: 15px !important;
        padding-right: 15px !important;
        padding-bottom: 40px;


        &__item {
          padding: 20px 15px;

          .info {
            h4 {
              font-size: 24px;
              font-weight: 400;
              line-height: 30px;
            }
          }
        }
      }

      h2 {
        font-size: 48px;
        font-weight: 300;
        line-height: 60px;
        color: #1D3130;
      }
    }
  }
`;

export default MyComponent;
