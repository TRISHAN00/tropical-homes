import React, {lazy, memo, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Button from "./Button";
import moment from "moment";
import NewsSingle from "./NewsSingle";

const MyComponent = ({data}) => {
    const [visibleItems, setVisibleItems] = useState(12);
    const handleLoadMore = () => {
        // Increase the number of visible items by 6 when the "Load More" button is clicked
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };

    return (
        <StyledComponent>
            <Container>
                <Row>
                    {
                        data && data?.length > 0 && data?.slice(0, visibleItems)?.map((item) => {
                            const thumb = item?.images?.list?.find((f) => f?.thumb === "on")
                            return (
                                <Col className={'blog-wrap'} lg={4} md={6}>
                                    <NewsSingle slug={item?.page_data?.slug} img={thumb?.full_path}
                                                title={item?.page_data?.subtitle}
                                                day={moment(item?.page_data?.date).format('DD')}
                                                month={moment(item?.page_data?.date).format('MMM')}
                                                year={moment(item?.page_data?.date).format('YYYY')}
                                                shortDesc={item?.page_data?.short_desc}/>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    {
                        data?.length > 12 && <Col sm={12} className={'d-flex justify-content-center'}>
                            <Button handleLoadMore={handleLoadMore} text={'Learn More'}/>
                        </Col>
                    }

                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  padding-top: 150px;
  padding-bottom: 110px;
  background-color: #F9F9F9;

  .blog-wrap {
    margin-bottom: 40px;
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export default memo(MyComponent);