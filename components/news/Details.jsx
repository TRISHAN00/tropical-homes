import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data}) => {
    console.log(data)
    const pageData = data?.page_data
    const images = data?.page_images?.list
    const filterThumb = images?.filter(item => item.thumb !== 'on');

    return (
        <StyledComponent>
            <div className="details">
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className="details__title">
                                <h1>{pageData?.subtitle}</h1>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col sm={10}>
                            <div className="details__desc">
                                <p>{reactHtmlParser(pageData?.description)}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            filterThumb?.map((item) => {
                                return (
                                    <Col md={5} sm={6} xs={6}>
                                        <div className="single-img">
                                            <Img src={item?.full_path}/>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  padding-top: 150px;
  padding-bottom: 90px;

  .details {
    &__title {
      h1 {
        font-size: 32px;
        font-weight: 300;
        line-height: 40px;
        font-family: ${title};
        padding-right: 250px;
      }
    }

    hr {
      margin-top: 25px;
      margin-bottom: 40px;
    }

    &__desc {
      p {
        padding-bottom: 40px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }

  .single-img {
    position: relative;
    padding-top: calc(300 / 470 * 100%);
    margin-bottom: 30px;
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 50px;
    .details {
      &__title {
        h3 {
          font-size: 28px;
          font-weight: 300;
          line-height: 32px;
          padding-right: unset;
        }
      }

      hr {
        margin-top: 15px;
        margin-bottom: 30px;
      }

      &__desc {
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
        }
      }
    }
  }
`;

export default MyComponent;
