import React, {memo, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {Img} from "../Img";
import Button from "../ButtonSubmit";
import LocationDropdown from "../LocationDropdown";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
// import {apiEndPoints} from "../../api/network/apiEndPoints";
// import {postForm} from "../../api/redux/projects";


const EnquiryForm = ({project}) => {
    const store = useSelector(s => s.projects)

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


    const handleFormSubmit = async (e) => {
        let api_services = 'https://cms.tropicalhomesltd.com/api/post-req-data/form-submit';
        var formData = new FormData();
        formData.append('form_id', 'enquiry-form');
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append('message', e?.message);
        // formData.append('projects', project && project);

        if(e.name !== "" && e.email !== "" && e.phone !== "" && e.message !== "") {
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
                    <Img src={'/images/dynamic/apply-bg.jpg'}/>
                </div>
                <div className="form-area__form">
                    <Container>
                        <Row>
                            <Col sm={{span: 9, offset: 1}} className={'text-center'}>
                                <div className="form-area__form__title">
                                    <h2 className={'split-up'}>Enquiry</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}}>
                                <Form className={'form'}>
                                    <Row>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Name*</Form.Label>
                                            <Form.Control
                                                className={errors?.name?.message ? 'has-error' : ''} {...register('name', {
                                                required: {
                                                    value: true,
                                                    message: "Please enter your full name",
                                                }

                                            })} type="text" placeholder="Enter your name"/>
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Phone Number*</Form.Label>
                                            <Form.Control
                                                className={errors?.phone?.message ? 'has-error' : ''}  {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: "Enter your valid phone number",
                                                },
                                                pattern: {
                                                    value: /^01[0-9]{9}$/,
                                                    message: "Enter a valid 11 digit phone number",
                                                },
                                            })} type="number" placeholder="Enter your phone number"/>
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Email (optional)</Form.Label>
                                            <Form.Control
                                                className={errors?.email?.message ? 'has-error' : ''} {...register('email', {

                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Please enter a valid email address"
                                                }
                                            })} type="text" placeholder="Enter your email address"/>
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Message*</Form.Label>
                                            <Form.Control
                                                className={errors?.message?.message ? 'has-error' : ''} {...register('message', {
                                                required: {
                                                    value: true,
                                                    message: "Please enter a your message"
                                                }
                                            })} type="text" placeholder="Enter your message here"/>
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <div onClick={handleSubmit(handleFormSubmit)} className="button">
                                                <Button width={'100%'} fontSize={'16'}
                                                        text={'Submit Message'}
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

  .dc-btn {
    width: unset;
  }
`;

export default memo(EnquiryForm);
