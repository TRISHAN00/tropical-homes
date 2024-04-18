import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {title} from "../styles/globalStyleVars";


const MyComponent = ({data}) => {
    useEffect(() => {
        const social = document.querySelector('.social');

        const handleResize = () => {
            if (social) {
                social.style.display = window.innerWidth > 767 ? 'none' : 'flex';
            }
        };

        // Initial setup
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <StyledComponent>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="footer-left">
                            <div className="footer-left-phone">
                                {data?.sales_inquiry && <div className="footer-left__item">
                                    <p>For Sales Inquiry</p>
                                    <h2><a
                                        href={`tel:${data?.sales_inquiry.replace(/ /g, "")}`}>{data?.sales_inquiry}</a>
                                    </h2>
                                </div>}
                                {
                                    data?.land_development && <div className="footer-left__item">
                                        <p>For Land Development</p>
                                        <h2><a
                                            href={`tel:${data?.land_development.replace(/ /g, "")}`}>{data?.land_development}</a>
                                        </h2>
                                    </div>
                                }
                            </div>
                            <div className="footer-left__item">
                                <ul className={'desktop-social'}>
                                    {data?.facebook && <li><a target="_blank" href={`${data?.facebook}`}>
                                        <img loading={'lazy'} src="/images/static/facebook.svg" alt=""/>
                                    </a></li>}
                                    {data?.instagram && <li><a target="_blank" href={`${data?.instagram}`}>
                                        <img loading={'lazy'} src="/images/static/instagram.svg" alt=""/>
                                    </a></li>}
                                    {data?.linkedin && <li><a target="_blank" href={`${data?.linkedin}`}>
                                        <img loading={'lazy'} src="/images/static/LinkedIn.svg" alt=""/>
                                    </a></li>}
                                    {data?.youtube && <li><a target="_blank" href={`${data?.youtube}`}>
                                        <img loading={'lazy'} src="/images/static/youtube.svg" alt=""/>
                                    </a></li>}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={{span: 3, offset: 3}}>
                        <div className="footer-right">
                            {
                                data?.office_location && <div className="footer-right__item">
                                    <p>Our address</p>
                                    <ul>
                                        <li><a target="_blank"
                                               href={data?.office_location_url}>{data?.office_location}</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                            <div className="footer-right__item show-in-desktop">
                                <p>Contact</p>
                                <ul>
                                    {data?.office_phone && <li>{data?.office_phone}</li>}
                                    {data?.info_email &&
                                        <li><a href={`mailto:${data?.info_email}`}>{data?.info_email}</a></li>}
                                </ul>
                            </div>
                            <div className="footer-right__item show-in-mobile">
                                <p>Contact</p>
                                <ul>
                                    {data?.office_phone && <li>{data?.office_phone}</li>}
                                    {data?.info_email &&
                                        <li><a href={`mailto:${data?.info_email}`}>{data?.info_email}</a></li>}
                                </ul>
                            </div>
                            <div className="footer-right__item social">
                                <ul className={'mobile-social'}>
                                    {data?.facebook && <li><a target="_blank" href={`${data?.facebook}`}>
                                        <img loading={'lazy'} src="/images/static/facebook.svg" alt=""/>
                                    </a></li>}
                                    {data?.instagram && <li><a target="_blank" href={`${data?.instagram}`}>
                                        <img loading={'lazy'} src="/images/static/instagram.svg" alt=""/>
                                    </a></li>}
                                    {data?.linkedin && <li><a target="_blank" href={`${data?.linkedin}`}>
                                        <img loading={'lazy'} src="/images/static/LinkedIn.svg" alt=""/>
                                    </a></li>}
                                    {data?.youtube && <li><a target="_blank" href={`${data?.youtube}`}>
                                        <img loading={'lazy'} src="/images/static/youtube.svg" alt=""/>
                                    </a></li>}
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={'footer-copy'}>
                    <Col md={3}>
                        <div>
                            <p className={'copyright'}>© {new Date().getFullYear()} Tropical Homes Limited</p>
                        </div>
                    </Col>
                    <Col md={{span: 3, offset: 1}}>
                        <div>
                            <p className={'dc'}><a target={"_blank"} href="https://dcastalia.com/">Design & Developed by
                                Dcastalia</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: #1D3130;

  padding: 120px 0px;
  //margin-top: -2px;

  .show-in-mobile {
    display: none !important;
  }

  .desktop-social li {
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 2;
    width: 40px;
    height: 40px;

    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      z-index: 3;
    }

    img {
      position: relative;
      z-index: 2;
      transition: .5s ease;
    }

    &:after {
      content: '';
      position: absolute;
      height: 0%;
      width: 0%;
      inset: 0;
      margin: auto;
      background-color: #fff;
      border-radius: 50%;
      transition: .5s ease;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }

      img {
        filter: invert(160%) sepia(60%) saturate(7450%) hue-rotate(354deg) brightness(86%) contrast(60%)
      }
    }
  }

  .mobile-social li {
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 2;
    width: 40px;
    height: 40px;

    img {
      position: relative;
      z-index: 2;
      transition: .5s ease;
    }

    &:after {
      content: '';
      position: absolute;
      height: 0%;
      width: 0%;
      inset: 0;
      margin: auto;
      background-color: #fff;
      border-radius: 50%;
      transition: .5s ease;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }

      img {
        filter: invert(160%) sepia(60%) saturate(7450%) hue-rotate(354deg) brightness(86%) contrast(60%)
      }
    }
  }

  .mobile-social {
    opacity: 0;
    visibility: hidden;
    display: flex !important;
    flex-direction: row !important;
  }

  .icon {
    position: absolute;
    top: 0;
    bottom: 80px;
    margin: auto;
    left: -60px;
  }

  .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }


  .dc {
    a {
      color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .footer-left-phone {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__item {


      p {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1.4px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
      }

      h2 {
        a {
          color: #FFFFFF;
          font-size: 48px;
          font-weight: 300;
          line-height: 48px;
          font-family: ${title};
        }
      }

      ul {
        display: flex;
        gap: 15px;
      }
    }
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__item {
      p {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1.4px;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.5);
        text-transform: uppercase;
        padding-bottom: 20px;
      }

      ul {
        display: flex;
        gap: 15px;
        flex-direction: column;

        li {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;

          a {
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            display: inline-block;
          }
        }
      }

      &:nth-last-of-type(1) {

      }
    }
  }

  .footer-copy {
    padding-top: 80px;
  }

  /* Normal desktop :992px. */
  @media (min-width: 992px) and (max-width: 1200px) {
    .footer-left__item h2 a {
      font-size: 42px;
    }
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .footer-left__item h2 a {
      font-size: 42px;
    }
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    padding: 80px 0px;
    .desktop-social {
      display: none !important;
    }

    .show-in-desktop {
      display: none !important;
    }

    .show-in-mobile {
      display: flex !important;
      flex-direction: column;

      ul {
        gap: unset;

        li {
          &:nth-child(odd) {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 1.4px;
            padding-bottom: 5px;
          }

          &:nth-child(2n):not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
    }

    .footer-left-phone {
      gap: 20px;
    }

    .footer-left {
      padding-bottom: 30px;
      gap: 30px;
    }

    .footer-left__item {
      p {
        padding-bottom: 5px;
      }

      h2 {
        a {
          font-size: 42px;
          font-weight: 300;
          line-height: 60px;
        }
      }
    }

    .footer-right {
      ul.desktop-social {
        display: none !important;
      }

      ul.mobile-social {
        opacity: 1;
        visibility: visible;
        display: flex;
        flex-direction: row;
      }
    }

    .footer-copy {
      padding-top: 40px;
    }
  }
`;

export default MyComponent;
