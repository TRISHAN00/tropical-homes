import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Img} from "../Img";
import Title from "../Title";

const MyComponent = ({data}) => {
    return (
        <StyledComponent className={'big-banner'}>

            <Container>
                <Row>
                    <Col sm={12} className={'pt-150'}>
                        <div className="big-banner__text ">
                            <Title marginSm={'0'} color={'#FFF'}
                                   text={data?.images?.list?.[0]?.short_title}/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="big-banner__img">
                <Img src={data?.images?.list?.[0]?.full_path}/>
            </div>

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background-color: #1D2F2B;
  overflow: hidden;
  //margin-bottom: -2px;

  .big-banner__img {
    position: relative;
    height: 80vh;

    img {
      object-position: bottom;
    }

    @media (min-width: 1500px) {
      height: 100vh;
    }
  }

  .big-banner__text {
    position: relative;

  }

  @media (max-width: 767px) {
    .big-banner__img {
      height: 400px;
    }

  }
`;

export default MyComponent;
