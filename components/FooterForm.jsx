import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import Select, {components} from "react-select";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {title} from "../styles/globalStyleVars";
import {apiEndPoints} from "../pages/api/network/ApiServices";
import contactReducer, {postForm} from "../pages/api/redux/contact";


const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13.414" height="7.207" viewBox="0 0 13.414 7.207">
            <path id="Path_7187" data-name="Path 7187" d="M1476.925,718l6,6,6-6"
                  transform="translate(-1476.218 -717.293)" fill="none" stroke="#1d3130" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1"/>
        </svg>
    </components.DropdownIndicator>
);

const FooterForm = ({bgHeight}) => {

    const store = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch()

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


    const handleFormSubmit = async (e) => {
        let api_services = 'https://cms.tropicalhomesltd.com/api/post-req-data/form-submit';
        var formData = new FormData();
        formData.append('form_id', 'get-in-touch');
        formData.append('name', e?.name);
        formData.append('email', e?.email);
        formData.append('phone', e?.phone);
        formData.append("form_id", "get-in-touch");

        // if (e.name !== "" && e.email !== "" && e.phone !== "") {
        //     try {
        //         const response = await fetch(api_services, {
        //             method: 'POST',
        //             body: formData
        //         });
        //         success('Form Submitted Successfully');
        //         if (!response.ok) {
        //             throw new Error('Failed to submit form');
        //             error('please fill out the correct inputs');
        //         }
        //         reset();
        //     } catch (error) {
        //         console.error('Error submitting form:', error.message);
        //         // Handle error
        //     }
        // }

        const apiEndPoint = apiEndPoints.FORM_SUBMIT
        dispatch(postForm([apiEndPoint, formData]))
    }


    useEffect(() => {
        if (!store?.loading) {
            if (isSubmitSuccessful) {
                success('Thank you for your message')
                reset()
            }
        }
    }, [isSubmitSuccessful, store])


    return (
        <GetInTouchStyle className={'footer-form'}>
            <Container>
                <div className="get-in-touch">
                    <div className="get-in-touch__title">
                        <h3>Get in touch!</h3>
                    </div>
                    <Form>
                        <div className="form">
                            <Form.Control
                                className={
                                    errors?.name?.message
                                        ? "has-error form-control-lg"
                                        : "form-control-lg"
                                }
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Please enter your full name",
                                    }

                                })}
                                type="text"
                                placeholder="Write your name*"
                                autoComplete="off"
                            />
                            <Form.Control
                                // id="myInput"
                                className={
                                    errors?.phone?.message
                                        ? "has-error form-control-lg"
                                        : "form-control-lg"
                                }
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Enter your valid phone number",
                                    },
                                    pattern: {
                                        value: /^01[0-9]{9}$/,
                                        message: "Enter a valid 11 digit phone number",
                                    },
                                })}
                                type="number"
                                placeholder="Write your phone*"
                                autoComplete="off"
                            />
                            <Form.Control
                                // id="myInput"
                                className={
                                    errors?.email?.message
                                        ? "has-error form-control-lg"
                                        : "form-control-lg"
                                }
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "Please enter a valid email address"
                                    },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                type="email"
                                placeholder="Write your email*"
                                autoComplete="off"
                            />
                            <div onClick={handleSubmit(handleFormSubmit)} style={{width: 'fit-content'}}>
                                <Button height={'47'} text={'Submit'}/>
                            </div>


                        </div>
                    </Form>
                </div>
            </Container>
        </GetInTouchStyle>
    );
};

const GetInTouchStyle = styled.section`
    position: relative;
    background-color: #F9F9F9;

    &:before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        bottom: 0px;
        background-color: #1D3130;
        //background-image: url('/images/static/mission-bg.png');
        //background-blend-mode: multiply;
        height: 50%;
    }

    &.bg-height:before {
        height: calc(100% + 5px);
        //top: -2px;
    }

    .form {
        display: flex;
        gap: 20px;
        margin-left: 70px;
        margin-right: 70px;
    }

    .row {
        flex-wrap: unset;
        gap: 20px;
    }

    .css-hlgwow {
        padding: 2px 0px;
    }

    .get-in-touch {
        background: #FFFFFF;
        position: relative;

        &__title {
            margin-bottom: 40px;
            padding-top: 60px;
            margin-left: 70px;
            margin-right: 70px;

            h3 {
                color: #1D3130;
                font-size: 32px;
                font-weight: 300;
                line-height: 40px;
                font-family: ${title};
                text-transform: uppercase;
            }
        }
    }


    //style input field

    form {
        padding-bottom: 60px !important;
    }

    .form-control {
        background: no-repeat;
        padding: 0;
        transition: 0.3s;
        color: #1D3130;
        border: 1px solid #1D3130;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        border-radius: 50px;
        padding-left: 20px;
        height: 47px;

    }

    input:internal-autofill-selected {
        background: transparent !important;
        color: #1D3130;
    }

    input.form-control::placeholder {
        color: #1D3130;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        opacity: 1;
    }

    input.form-control:focus {
        border-color: #1D3130;
    }

    input.form-control:focus::placeholder {
        color: #1D3130;
    }

    input.form-control:valid:focus {
        border-color: #1D3130; /* Solid white */
    }

    //  style select field

    .css-t3ipsp-control {
        border-color: #1D3130;
        border-radius: 24px;
    }

    .css-t3ipsp-control:hover {
        border-color: #1D3130;
    }

    .css-1u9des2-indicatorSeparator {
        display: none;
    }

    .css-13cymwt-control {
        border-color: #1D3130;
        height: 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        border-radius: 24px;
    }

    .css-1fdsijx-ValueContainer {
        padding: 0px 20px;
    }

    /* Style to remove the indicator separator in React Select */

    .css-1jqq78o-placeholder {
        color: #1D3130;
        padding-left: 20px;
    }

    div#react-select-3-placeholder {
        color: #1D3130;
        -webkit-text-fill-color: #1D3130 !important;
        padding-left: unset;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: white;
        box-shadow: #1D3130 0px 0px 0px 1000px inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    /* Tablet desktop :768px. */
    @media (min-width: 768px) and (max-width: 991px) {
        .form {
            flex-direction: column;
        }

        .row {
            flex-direction: column;
        }

        form {
            padding: 0px 15px;
        }

        .get-in-touch__title {
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    /* small mobile :320px. */
    @media (max-width: 767px) {
        background: #FFFFFF;
        padding-top: 40px;
        padding-bottom: 40px;
        .form {
            flex-direction: column;
            margin-left: unset;
            margin-right: unset;
        }

        .dc-btn {
            height: 40px;
        }

        .offset-lg-1 {
            padding: unset;
        }

        .col-md-2 {
            padding: unset;
        }

        .col-md-12 {
            padding: unset;
        }

        form {
            padding: 0 !important;
        }

        .get-in-touch__title {
            padding: unset;
            margin: unset;
        }

        .row {
            flex-direction: column;
            padding-left: 15px;
            padding-right: 15px;
        }

        .get-in-touch {
            background: #FFFFFF;
            position: relative;

            &__title {
                margin-bottom: 30px;
                //padding-top: 40px;

                h3 {
                    color: #1D3130;
                    font-size: 28px;
                    font-weight: 300;
                    line-height: 32px;
                }
            }
        }

        &:before {
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            height: 50%;
        }

        .get-in-touch {
            padding: unset;
            background: transparent;
        }
    }
`;

export default FooterForm;
