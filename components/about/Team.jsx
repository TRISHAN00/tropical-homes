import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Title from "../Title";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import reactHtmlParser from "react-html-parser";

const MyComponent = ({data, id}) => {
    return (
        <StyledComponent className={'mission as-team pt-150 pb-150'}>
            <Container>
                <Row>
                    {
                        data?.posts?.list?.map((item, index) => {
                            return (
                                <div id={item?.data?.slug} key={index} className="mission__single d-flex flex-wrap">
                                    <Col sm={12} md={6} className={'mission__single__text'}>
                                        <Title text={item?.data?.title} margin={'0 0 50px 0'}/>
                                        <h4>{reactHtmlParser(item?.data?.subtitle)}</h4>
                                        <h5>{reactHtmlParser(item?.data?.short_desc)}</h5>
                                        {reactHtmlParser(item?.data?.description)}
                                    </Col>

                                    <Col sm={12} md={6} className={'img-col'}>
                                        <div className="mission__single__img">
                                            <Img src={item?.images?.[0]?.full_path}/>
                                        </div>
                                    </Col>
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`


  .mission__single {
    p {

      &:not(:nth-last-of-type(1)) {
        margin-bottom: 20px;
      }
    }

    h4 {
      font-size: 24px;
      line-height: 30px;
      text-transform: uppercase;
      font-family: ${title};
    }

    h5 {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 40px;
    }

    &__img {
      padding-top: calc(650 / 470 * 100%);
      position: relative;
    }

    &:nth-of-type(odd) {
      .img-col {
        padding-left: 100px;
      }
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      .img-col {
        padding-right: 100px;
      }
    }

    &:not(:nth-last-of-type(1)) {
      margin-bottom: 100px;
    }

  }

  @media (max-width: 991px) {
    .img-col {
      padding: 0 15px !important;
    }

  }

  @media (max-width: 767px) {
    .mission__single__text {
      margin-bottom: 40px;

      h5 {
        margin-bottom: 30px;
      }
    }

    .mission__single p:not(:nth-last-of-type(1)) {
      margin-bottom: 15px;
    }

    .mission__single:not(:nth-last-of-type(1)):not(:nth-last-of-type(1)) {
      margin-bottom: 60px;
    }
  }

`;

export default memo(MyComponent);
