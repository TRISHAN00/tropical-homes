import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {Img} from "../Img";
import Button from "../ButtonSubmit";
import {components} from "react-select";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
// import { apiEndPoints } from "../../api/network/apiEndPoints";
// import { postForm } from "../../api/redux/career";

const CustomDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <rect
                id="Rectangle_5620"
                data-name="Rectangle 5620"
                width="20"
                height="20"
                fill="#fff"
                opacity="0"
            />
        </svg>
    </components.DropdownIndicator>
);
const ApplyForm = ({data}) => {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [cv, setCv] = useState(null);
    const handleFileChange = (event) => {
        setCv(event.target.files[0])
        const file = event.target.files[0];
        setSelectedFileName(file.name);
    };

    // form submission
    const {
        register,
        control,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm({
        mode: "all",
    });
    const success = (msg) =>
        toast.success(msg, {
            position: "top-right",
            autoClose: 4000,
            closeOnClick: true,
            progress: undefined,
        });

    const error = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 4000,
            closeOnClick: true,
            progress: undefined,
        });

    const handleFormSubmit = async (data) => {
        let api_services = 'https://cms.tropicalhomesltd.com/api/post-req-data/form-submit';
        var formData = new FormData();
        formData.append("form_id", "career-form");
        formData.append("name", data?.name);
        formData.append("email", data?.email);
        formData.append("phone", data?.phone);
        formData.append("message", data?.message);
        formData.append("file", cv);

        if (data.name !== "" && data.email !== "" && data.phone !== "" && data.message !== "") {
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
    };



    return (
        <StyledComponent>
            <div className="form-area">
                <div className="form-area__bg">
                    <Img src={"/images/dynamic/apply-bg.jpg"}/>
                </div>
                <div className="form-area__form">
                    <Container>
                        <Row>
                            <Col sm={{span: 9, offset: 1}} className={"text-center"}>
                                <div className="form-area__form__title">
                                    {data?.section_data?.subtitle ? (
                                        <h2 className={"split-up"}>
                                            {data?.section_data?.subtitle}
                                        </h2>
                                    ) : (
                                        <h2 className={"split-up"}>{"Apply Now"}</h2>
                                    )}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}}>
                                <Form className={"form"}>
                                    <Row>
                                        <Col className={"form__item"} md={6} xs={12}>
                                            <Form.Label>Name*</Form.Label>
                                            <Form.Control
                                                className={errors?.name?.message ? "has-error" : ""}
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Please enter your full name",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                        </Col>
                                        <Col className={"form__item"} md={6} xs={12}>
                                            <Form.Label>Phone Number*</Form.Label>
                                            <Form.Control
                                                className={errors?.phone?.message ? "has-error" : ""}
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
                                                placeholder="Enter your phone number"
                                            />
                                        </Col>
                                        <Col className={"form__item"} md={6} xs={12}>
                                            <Form.Label>Email*</Form.Label>
                                            <Form.Control
                                                className={errors?.email?.message ? "has-error" : ""}
                                                {...register("email", {
                                                    pattern: {
                                                        value:
                                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Please enter a valid email address",
                                                    },
                                                })}
                                                type="email"
                                                placeholder="Enter your email address"
                                            />
                                        </Col>
                                        <Col className={"form__item"} md={6} xs={12}>
                                            <Form.Label>CV*</Form.Label>
                                            <div className="attachCvName">
                                                <div className="attach-cv">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.268" height="24"
                                                         viewBox="0 0 26.268 24"
                                                         style={{display: selectedFileName ? "none" : "block"}}>
                                                        <g id="Group_15866" data-name="Group 15866"
                                                           transform="translate(-12252 -863)">
                                                            <path id="Path_6994" data-name="Path 6994"
                                                                  d="M129.092,23.561a4.6,4.6,0,0,0-3.3-1.463h-.057a4.7,4.7,0,0,0-3.2,1.384l-.009.008L110.8,35.42a2.822,2.822,0,0,0,0,4.1,2.878,2.878,0,0,0,2.044.892h0a2.9,2.9,0,0,0,2.061-.9l8.11-8.285a1.026,1.026,0,0,0-1.466-1.435l-8.106,8.281a.862.862,0,0,1-.6.283.828.828,0,0,1-.586-.283.791.791,0,0,1,0-1.212l11.718-11.914a2.444,2.444,0,0,1,3.658.058,2.571,2.571,0,0,1,.019,3.809,1.026,1.026,0,1,0,1.458,1.443,4.6,4.6,0,0,0-.019-6.695Z"
                                                                  transform="translate(12147.724 840.902)"
                                                                  fill="#181D24"/>
                                                            <path id="Path_6995" data-name="Path 6995"
                                                                  d="M21.594,71.964a1.026,1.026,0,0,0-1.45.023L10.019,82.444a4.609,4.609,0,0,1-3.266,1.435h0A4.56,4.56,0,0,1,3.49,82.418a4.374,4.374,0,0,1,0-6.476L13.6,65.836a1.026,1.026,0,0,0-1.45-1.451L2.037,74.493l0,0A6.745,6.745,0,0,0,0,79.046a6.537,6.537,0,0,0,2.029,4.814,6.653,6.653,0,0,0,4.721,2.07h0a6.644,6.644,0,0,0,4.728-2.048L21.617,73.414A1.026,1.026,0,0,0,21.594,71.964Z"
                                                                  transform="translate(12252 801.07)" fill="#181D24"/>
                                                        </g>
                                                    </svg>
                                                    <Form.Control
                                                        type="file"
                                                        accept=".pdf"
                                                        id="resume-upload"
                                                        style={{display: "none"}}
                                                        {...register("file", {
                                                            required: 'Please attach a file',
                                                        })}
                                                        onChange={handleFileChange}
                                                    />
                                                    <Form.Label htmlFor="resume-upload" className="resume-upload-label"
                                                                style={{display: selectedFileName ? "none" : "block"}}>
                                                        Attach Resume
                                                    </Form.Label>
                                                    {selectedFileName && (
                                                        <div className="file-name">
                                                            {selectedFileName}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <span>Max 2MB</span>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Cover Letter*</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={6} // This sets the number of visible rows, adjust as needed
                                                placeholder="Message"
                                                {...register("message")}
                                            />
                                        </Col>
                                        <Col className={"form__item"} md={6} xs={12}>
                                            <div
                                                className="button"
                                                onClick={handleSubmit(handleFormSubmit)}
                                            >
                                                <Button
                                                    width={"100%"}
                                                    fontSize={"16"}
                                                    text={"Submit Message"}
                                                    color={"#FFFFFF"}
                                                    background={"#00A651"}
                                                    hoverBackground={"#1D3130"}
                                                />
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

    textarea {
        background: transparent !important;
        color: #fff !important;
    }
`;

export default ApplyForm;
