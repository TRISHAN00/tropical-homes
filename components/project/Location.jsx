import React, {memo} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import {title} from "../../styles/globalStyleVars";
import Lines from "../Lines";
import GoogleMapsMarkers from "../project/GoogleMapsMarkers";

const Location = ({id, line, data, sectionData, gallery, slide, windowWidth, isBtn}) => {
    return (
        <StyledComponent line={line} className={'about-global divider'} id={id}>
            {
                line ? '' : <Lines/>
            }

            <Container fluid className={'p-0'}>
                <Row>
                    <Col sm={12}>
                        {data?.section_data?.title ?
                            <h4 className={'split-up'}>{sectionData?.section_data?.title}</h4> :
                            <h4 className={'split-up'}>{'Location'}</h4>
                        }
                    </Col>
                </Row>
                <div className="map">
                    <GoogleMapsMarkers isBtn windowWidth={windowWidth} slide={slide} gallery={gallery} detail data={data} full/>
                </div>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  background-color: #F9F9F9;
  padding-top: 100px;

  .global-image {
    background-image: none !important;
  }

  h4 {
    font-size: 48px;
    line-height: 60px;
    color: #1D3130;
    font-weight: 300;
    margin-bottom: 60px;
    font-family: ${title};
    text-transform: uppercase;
    text-align: center;
  }


  @media (max-width: 767px) {
    padding-bottom: unset;
    //height: 450px;
    h4 {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 40px;
    }


  }


`;

export default memo(Location);
