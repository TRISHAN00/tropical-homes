import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Col} from "react-bootstrap";
import Button from "../Button";
import {hoverNd} from "../../styles/globalStyleVars";
import {title} from "../../styles/globalStyleVars";

const MyComponent = ({data}) => {
    return (
        <StyledComponent id={'tallest-building'} className={'go-projects'}>
            <Container fluid className={'p-0'}>
                <Col md={{span: 8, offset: 2}} className={'go-project__text'}>
                    {data?.section_data?.short_desc && <h1 className={'split-up'}>{data?.section_data?.short_desc}</h1>}
                    <Button margin={'auto'} color={'#FFF'} text={'explore projects'}
                            src={'/projects/tropical-ta-tower'}/>
                </Col>
                <img className={'img-left'}
                     src={data?.images?.list?.find(f => f.Behind === 'on').full_path}
                     alt="project"/>
                <img className={'img-right'}
                     src={data?.images?.list?.find(f => f.thumb === 'on').full_path}
                     alt="project"/>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background-color: ${hoverNd};
  position: relative;

  .go-project__text {
    padding-top: 70px;
    padding-bottom: 70px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    object-fit: contain;
  }

  .img-right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    object-fit: contain;
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 300;
    color: rgb(255, 255, 255);
    font-family: ${title};
    margin-bottom: 30px;
  }

  @media (max-width: 991px) {
    .go-project__text {
      min-width: 100%;
      margin: 0;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 767px) {
    h1 {
      margin-bottom: 30px;
      font-size: 32px !important;
      line-height: 40px !important;

    }
  }
`;

export default MyComponent;
