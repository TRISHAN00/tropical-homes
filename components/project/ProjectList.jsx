import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Select, { components } from 'react-select';
import ProjectSingle from '../ProjectSingle';
import { useRouter } from 'next/router';

const MyComponent = ({
                         data,
                         setSelectedStatus,
                         setSelectedType,
                         setSelectedLocation,
                         location,
                     }) => {
    const router = useRouter();

    const [visibleItems, setVisibleItems] = useState(12);
    const [hideProject, setHideProject] = useState(false); // Define hideProject state

    const handleLoadMore = () => {
        // Increase the number of visible items by 6 when the "Load More" button is clicked
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
    };

    // dropdown style
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#FFF' : 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? '#00A651' : '#]212158',
            margin: 0,
            cursor: 'pointer',
        }),
        menu: (provided, state) => ({
            ...provided,
            color: 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)',
            margin: 0,
        }),
        menuList: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#000' : '#FFF',
            borderRadius: 0,
            cursor: 'pointer',
        }),
    };


    // drop down indicator
    const DropdownIndicator = (props) => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    {props.selectProps.menuIsOpen ? (
                        <img src="/images/static/caret-up.svg" alt="" />
                    ) : (
                        <img src="/images/static/caret-down.svg" alt="" />
                    )}
                </components.DropdownIndicator>
            )
        );
    };

    // options
    const status = [
        { value: 'ready', label: 'Ready' },
        { value: 'ongoing', label: 'Ongoing' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'completed', label: 'Completed' },
    ];
    const type = [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'condominium ', label: 'Condominium ' },
    ];

    // hide completed projects
    useEffect(() => {
        if (router.query.status === 'completed') {
            setHideProject(false);
        } else {
            setHideProject(true);
        }
    }, [router.query.status]);


    return (
        <StyledComponent className={'projects-list'}>
            <Container>
                <Row className={'projects-list__filter'}>
                    <Col md={4} sm={6}>
                        <p>Status</p>
                        <Select
                            components={{ DropdownIndicator }}
                            styles={customStyles}
                            classNamePrefix={'custom'}
                            className="select-here"
                            placeholder={router.query.status || 'Project Status'}
                            options={status}
                            onChange={(selectedOption) => setSelectedStatus(selectedOption.value)}
                        />
                    </Col>
                    <Col md={4} sm={6}>
                        <p>Type</p>
                        <Select
                            components={{ DropdownIndicator }}
                            styles={customStyles}
                            classNamePrefix={'custom'}
                            className="select-here"
                            placeholder={router.query.type || 'Project Type'}
                            options={type}
                            onChange={(selectedOption) => setSelectedType(selectedOption.value)}
                        />
                    </Col>
                    <Col md={4} sm={6}>
                        <p>Location</p>
                        <Select
                            components={{ DropdownIndicator }}
                            styles={customStyles}
                            classNamePrefix={'custom'}
                            className="select-here"
                            placeholder={router.query.location || 'Project Location'}
                            options={location}
                            onChange={(selectedOption) => setSelectedLocation(selectedOption.value)}
                        />
                    </Col>
                </Row>
            </Container>

            <div className="project-list__wrap">
                <Container>
                    <Row>
                        {data?.map((item, index) => {
                            const thumb = item?.images?.list.find((f) => f?.thumb === 'on');
                            return (
                                <Col
                                    key={index}
                                    className={
                                        hideProject && item?.product_data?.category_id === 'completed'
                                            ? 'no-need'
                                            : 'project-show'
                                    }
                                    md={4}
                                    sm={6}
                                >
                                    <ProjectSingle
                                        catId={item?.product_data?.category_id}
                                        slug={item?.product_data?.slug}
                                        address={item?.product_data?.location}
                                        title={item?.product_data?.title}
                                        img={thumb?.full_path ? thumb?.full_path : '/images/dynamic/project1.jpg'}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    padding-top: 60px;
    padding-bottom: 150px;
    background-color: #1D3130;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    //load more button
    .load-more {
        padding-top: 60px;
    }

    .project-list__filter {
        padding-bottom: 40px;

        p {
            font-size: 12px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 10px;
        }
    }

    //caret
    .custom__control {
        background-color: transparent;
        border: 1px solid #D0DEDE !important;
        box-shadow: none;
        outline: none !important;
        cursor: pointer;
        margin-bottom: 20px;
        border-radius: 50px!important;
        height: 50px;
        padding: 0 30px;

        svg line {
            stroke: #FFF
        }

        .custom__single-value {
            color: #FFF;
            font-size: 15px;
            line-height: 20px;
        }

        .custom__placeholder {
            text-transform: capitalize;
            color: #FFF;
            font-size: 16px;
            line-height: 24px;
        }

        .custom__value-container {
            padding-left: 0;
        }

        &--is-focused {

        }
    }

    .custom__menu {
        z-index: 9;
    }

    .css-t3ipsp-control:hover {
        border-color: rgba(255, 255, 255, 0.46);
    }

    .custom__indicator-separator {
        display: none;
    }

    .custom__indicator {
        padding-right: 0;
    }

    .project-list__wrap {
        padding-top: 40px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        min-height: 70vh;

        .col-sm-6 {
            margin-bottom: 40px;
        }
    }

    @media (min-width: 768px) {
        //load more button
        .load-more {
            padding-top: 40px;
        }
    }
`;

export default MyComponent;