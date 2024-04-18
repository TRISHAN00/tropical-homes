import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import ReactHtmlParser from "react-html-parser";
import {title} from "../styles/globalStyleVars";
import Lines from "./Lines";

const Overview = ({descriptionLeft, descriptionRight, aboutPage, title, id, bg}) => {
    return (
        <StyledComponent bg={bg} className={'about-global divider pt-150 pb-150'} id={id}>
            <Lines/>
            <Container>
                <Row>
                    <Col sm={aboutPage ? 11 : 9}>
                        {title && <h4 className={'split-up'}>{ReactHtmlParser(title)}</h4>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="paragraph">
                            <p>{ReactHtmlParser(descriptionLeft)}</p>
                            <p>{ReactHtmlParser(descriptionRight)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background-color: ${props => props.bg ? props.bg : ''};

  .global-image {
    background-image: none !important;
  }

  .paragraph {
    display: flex;
    gap: 30px;

    p {
      min-width: 50%;
    }
  }

  h4 {
    font-size: 48px;
    line-height: 60px;
    color: #1D3130;
    font-weight: 300;
    margin-bottom: 60px;
    font-family: ${title};
    text-transform: uppercase;
  }

  p {
    color: #221F1F;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    .col-sm-9 {
      min-width: 100%;
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 60px;

    .paragraph {
      flex-direction: column;
    }

    h4 {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 40px;
    }

    p {
      font-size: 14px !important;
      line-height: 21px !important;
    }
  }


`;

export default memo(Overview);
