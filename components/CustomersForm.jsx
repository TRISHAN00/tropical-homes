import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

import {useForm} from "react-hook-form";
import Select, {components} from "react-select";
import {Img} from "./Img";
import Button from "./ButtonSubmit";
// import {apiEndPoints} from "../api/network/apiEndPoints";
// import {postForm} from "../api/redux/landowner";
import Title from "./Title";

const CustomDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18.829" height="10.414" viewBox="0 0 18.829 10.414">
            <path id="Path_7189" data-name="Path 7189" d="M1476.925,718l8,8,8-8"
                  transform="translate(-1475.511 -716.586)" fill="none" stroke="#fff" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"/>
        </svg>
    </components.DropdownIndicator>
);

const LandownerForm = ({windowWidth}) => {

// dropdown style
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#FFF' : 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? '#00A651' : 'rgba(0,0,0,0)',
            margin: 0,
            cursor: 'pointer'
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
            cursor: 'pointer'
        }),

        placeholder: (provided, state) => ({
            ...provided,
            color: 'rgba(255, 255, 255, 0.5)',
        }),
    };


    // drop down indecator
    const DropdownIndicator = props => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    {props.selectProps.menuIsOpen ?
                        <img src="/images/static/caret-up.svg" alt="up"/>
                        :
                        <img src="/images/static/caret-down.svg" alt="down"/>
                    }

                </components.DropdownIndicator>
            )
        );
    };

    const store = useSelector(s => s.landowner)


    const facing = [
        {value: 'east', label: 'East'},
        {value: 'west', label: 'West'},
        {value: 'north', label: 'North'},
        {value: 'south', label: 'South'},
    ];

    // status
    const status = [
        {value: 'Ready', label: 'Ready'},
        {value: 'Ongoing', label: 'Ongoing'},
        {value: 'Upcoming', label: 'Upcoming'},
    ];

    // category
    const category = [
        {value: 'Residential', label: 'Residential'},
        {value: 'Commercial', label: 'Commercial'},
        {value: 'Condominium', label: 'Condominium'},
    ];


    // form submission
    const {register, control, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm({
        mode: "all",
    })
    const success = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });


    const error = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        closeOnClick: true,
        progress: undefined,

    });

    const dispatch = useDispatch()
    // const apiEndPoint = apiEndPoints.FORM_SUBMIT

    const [Facing, setFacing] = useState('')
    const [Type, setType] = useState('')
    const [Status, setStatus] = useState('')
    const handleFacing = (e) => {
        setFacing(e)
    }
    const handleType = (e) => {
        setType(e)
    }
    const handleStatus = (e) => {
        setStatus(e)
    }

    const handleFormSubmit = async (e) => {
        let api_services = 'https://cms.tropicalhomesltd.com/api/post-req-data/form-submit';

        var formData = new FormData();
        formData.append('form_id', 'customer-form');
        formData.append('locaiton', e?.location);
        formData.append('size', e?.size);
        formData.append('facing', Facing);
        formData.append('bed_rooms', e?.room);
        formData.append('project_type', Type);
        formData.append('project_status', Status);
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);

        if (e.name !== "" && e.email !== "" && e.phone !== "" && e.message !== "") {
            try {
                const response = await fetch(api_services, {
                    method: 'POST',
                    body: formData
                });
                success('Thank you for your message');
                if (!response.ok) {
                    throw new Error('Failed to submit form');
                    error('please fill out the correct inputs');
                }
                reset();
            } catch (error) {
                console.error('Error submitting form:', error.message);
                // Handle error
            }
        }
    }



    return (
        <StyledComponent>
            <div className="form-area">
                <div className="form-area__bg">
                    {windowWidth > 767 ? <Img src={'/images/dynamic/apply-bg.jpg'}/> :
                        <Img src={'/images/dynamic/mb-get-in-touch.jpg'}/>}

                </div>
                <div className="form-area__form">
                    <Container>
                        <Row>
                            <Col sm={{span: 12}}>
                                <Form className={'form'}>
                                    <Row>

                                        <Col md={6} sm={12}>
                                            <Title margin={'0 0 40px 0'} color={'#FFF'} fontSize={'48px'}
                                                   lineHeight={'48px'}
                                                   text={'Your Preferences'}/>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Project Type</Form.Label>
                                                <Select onChange={e => handleType(e.value)}
                                                        components={{DropdownIndicator}}
                                                        styles={customStyles}
                                                        classNamePrefix={'custom'} className='select-here '
                                                        placeholder={'Select Type'}
                                                        options={category}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Project Status</Form.Label>
                                                <Select onChange={e => handleStatus(e.value)}
                                                        components={{DropdownIndicator}}
                                                        styles={customStyles}
                                                        classNamePrefix={'custom'} className='select-here '
                                                        placeholder={'Select Status'}
                                                        options={status}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Preferred Location</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your preferred location*"
                                                    // className={errors?.location?.message ? 'has-error' : ''}
                                                    {...register('location')}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Preferred Size</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your preferred size"
                                                    // className={errors?.size?.message ? 'has-error' : ''}
                                                    {...register('size')}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Preferred Facing</Form.Label>
                                                <Select onChange={e => handleFacing(e.value)}
                                                        components={{DropdownIndicator}}
                                                        styles={customStyles}
                                                        classNamePrefix={'custom'} className='select-here '
                                                        placeholder={'Select Preferred facing'}
                                                        options={facing}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Preferred Bedrooms</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your preferred bedrooms"
                                                    // className={errors?.room?.message ? 'has-error' : ''}
                                                    {...register('room')}
                                                />
                                            </Form.Group>


                                            {/*<Form.Group className={'form-group'}>*/}
                                            {/*    <Form.Label>Plot Category*</Form.Label>*/}
                                            {/*    <Select onChange={e => handleFacing(e.vale)}*/}
                                            {/*            components={{DropdownIndicator}}*/}
                                            {/*            styles={customStyles}*/}
                                            {/*            classNamePrefix={'custom'} className='select-here '*/}
                                            {/*            placeholder={'Select plot facing'}*/}
                                            {/*            options={category}*/}
                                            {/*    />*/}
                                            {/*</Form.Group>*/}


                                        </Col>

                                        <Col className={'customers-info'} md={6} sm={12}>
                                            <Title margin={'0 0 40px 0'} color={'#FFF'} fontSize={'48px'}
                                                   lineHeight={'48px'}
                                                   text={'Contact Information'}/>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Name*</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className={errors?.name?.message ? 'has-error' : ''} {...register('name', {
                                                    required: {
                                                        value: true,
                                                        message: "Please enter your full name",
                                                    }

                                                })}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Phone Number*</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter your phone number*"
                                                    className={errors?.phone?.message ? 'has-error' : ''}  {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Enter your valid phone number",
                                                    },
                                                    pattern: {
                                                        value: /^01[0-9]{9}$/,
                                                        message: "Enter a valid 11 digit phone number",
                                                    },
                                                })}
                                                />
                                            </Form.Group>

                                            <Form.Group className={'form-group'}>
                                                <Form.Label>Email (optional)</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    className={errors?.email?.message ? 'has-error' : ''} {...register('email', {

                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Please enter a valid email address"
                                                    }
                                                })}
                                                />
                                            </Form.Group>

                                            <input name={"spam_protector"} type="hidden"/>

                                            <div className="button" onClick={handleSubmit(handleFormSubmit)}>
                                                <Button width={'100%'} fontSize={'16'}
                                                        text={'Submit'}
                                                        color={'#FFFFFF'} background={'#00A651'}
                                                        hoverBackground={'#1D3130'}/>
                                            </div>

                                        </Col>


                                    </Row>

                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    position: relative;


    .custom__menu {
        z-index: 9;
    }

    //caret

    .css-qbdosj-Input {
        margin: unset;
    }

    .form-group {
        margin-bottom: 30px;
    }

    .custom__control {
        background-color: transparent;
        border: 1px solid #D0DEDE !important;
        box-shadow: none;
        outline: none !important;
        cursor: pointer;
        //margin-bottom: 60px;
        border-radius: 60px !important;
        height: 60px;

        padding: 0 30px;
        margin-top: unset;

        svg line {
            stroke: #FFF
        }


        .custom__single-value {
            color: #FFF;
            font-size: 15px;
            line-height: 20px;
        }

        .custom__placeholder {

            color: rgba(255, 255, 255, 0.5);
            font-size: 16px;
            line-height: 24px;
        }

        .custom__value-container {
            padding-left: 0;
        }
    }

    .css-t3ipsp-control:hover {
        border-color: rgba(255, 255, 255, 0.46);
    }

    .css-qbdosj-Input {
        height: 60px !important;
        padding: unset;
    }

    .custom__control .custom__value-container {
        height: 60px;
    }

    .custom__indicator-separator {
        display: none;
    }

    .custom__indicator {
        padding-right: 0;
    }

    .customers-info {
        @media (max-width: 767px) {

        }
    }

    //.css-1fdsijx-ValueContainer {
    //  padding-top: 0 !important;
    //}

    @media (max-width: 767px) {
        textarea.form-control {
            height: 150px;
        }
    }
`;

export default LandownerForm;
