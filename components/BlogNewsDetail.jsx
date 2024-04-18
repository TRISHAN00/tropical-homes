import React, {lazy, memo, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import BlogSingle from "./BlogSingle";
import Button from "./Button";
import moment from "moment";

const MyComponent = ({data}) => {
    const [visibleItems, setVisibleItems] = useState(12);

    const handleLoadMore = () => {
        // Increase the number of visible items by 6 when the "Load More" button is clicked
        setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
    };

    const index0 = data[0];
    const index1 = data[1];
    const index2 = data[2];
    const index3 = data[3];
    const index4 = data[4];
    const index5 = data[5];
    const index6 = data[6];
    const index7 = data[7];

    return (
        <StyledComponent>
            <Container>
                <Row>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/tech-driven-amenities-smart-home-features-transforming-living-spaces/'} img={index0?.images?.list?.[0]?.full_path}
                                    title={index0?.page_data?.subtitle}
                                    day={moment(index0?.page_data?.date).format('DD')}
                                    month={moment(index0?.page_data?.date).format('MMM')}
                                    year={moment(index0?.page_data?.date).format('YYYY')}
                                    shortDesc={index0?.page_data?.short_desc}/>
                    </Col>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/the-future-of-condominium-living-trends-and-innovations-in-urban-development/'} img={index1?.images?.list?.[0]?.full_path}
                                    title={index1?.page_data?.subtitle}
                                    day={moment(index1?.page_data?.date).format('DD')}
                                    month={moment(index1?.page_data?.date).format('MMM')}
                                    year={moment(index1?.page_data?.date).format('YYYY')}
                                    shortDesc={index1?.page_data?.short_desc}/>
                    </Col>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/mixed-use-developments-blending-business-and-living-spaces-for-modern-lifestyles/'} img={index2?.images?.list?.[0]?.full_path}
                                    title={index2?.page_data?.subtitle}
                                    day={moment(index2?.page_data?.date).format('DD')}
                                    month={moment(index2?.page_data?.date).format('MMM')}
                                    year={moment(index2?.page_data?.date).format('YYYY')}
                                    shortDesc={index2?.page_data?.short_desc}/>
                    </Col>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/exploring-the-charm-top-reasons-to-buy-flats-in-bashundhara/'} img={index3?.images?.list?.[0]?.full_path}
                                    title={index3?.page_data?.subtitle}
                                    day={moment(index3?.page_data?.date).format('DD')}
                                    month={moment(index3?.page_data?.date).format('MMM')}
                                    year={moment(index3?.page_data?.date).format('YYYY')}
                                    shortDesc={index3?.page_data?.short_desc}/>
                    </Col>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/rules-of-successful-land-development-design/'} img={index4?.images?.list?.[0]?.full_path}
                                    title={index4?.page_data?.subtitle}
                                    day={moment(index4?.page_data?.date).format('DD')}
                                    month={moment(index4?.page_data?.date).format('MMM')}
                                    year={moment(index4?.page_data?.date).format('YYYY')}
                                    shortDesc={index4?.page_data?.short_desc}/>
                    </Col>
                    <Col className={'blog-wrap'} lg={4} md={6}>
                        <BlogSingle slug={'https://blog.tropicalhomesltd.com/5-benefits-of-green-building/'} img={index5?.images?.list?.[0]?.full_path}
                                    title={index5?.page_data?.subtitle}
                                    day={moment(index5?.page_data?.date).format('DD')}
                                    month={moment(index5?.page_data?.date).format('MMM')}
                                    year={moment(index5?.page_data?.date).format('YYYY')}
                                    shortDesc={index5?.page_data?.short_desc}/>
                    </Col>
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
