import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Form} from "react-bootstrap";
import {Img} from "../Img";
import Button from "../ButtonSubmit";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import Select, {components} from "react-select";
import {apiEndPoints} from "../../pages/api/network/ApiServices";
import contactReducer, {postForm} from "../../pages/api/redux/contact";

const CustomDropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <rect id="Rectangle_5620" data-name="Rectangle 5620" width="20" height="20" fill="#fff" opacity="0"/>
        </svg>
    </components.DropdownIndicator>
);

const GetInTouch = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [selectType, setSelectType] = useState(null); // Initialize with null or the default selected value
    // const {register, handleSubmit, formState, reset} = useForm({mode: "all"});
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm({
        mode: "all",
    });
    const store = useSelector((state) => state.contactReducer);
    // dropdown style
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            color: state.isSelected ? '#FFF' : 'rgba(0,0,0,0.5)',
            backgroundColor: state.isSelected ? '#00A651' : '#]212158',
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
    };

    // drop down indecator
    const DropdownIndicator = props => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    {props.selectProps.menuIsOpen ?
                        <img src="/images/static/caret-up.svg" alt=""/>
                        :
                        <img src="/images/static/caret-down.svg" alt=""/>
                    }

                </components.DropdownIndicator>
            )
        );
    };
    // options
    const status = [
        {value: 'completed', label: 'Completed'},
        {value: 'ongoing', label: 'Ongoing'},
        {value: 'upcoming', label: 'Upcoming'},
    ];


    //--- form submit
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

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        // let api_services = 'https://cms.tropicalhomesltd.com/api/post-req-data/form-submit';
        let api_services = apiEndPoints.FORM_SUBMIT

        var formData = new FormData();
        formData.append("name", e?.name);
        formData.append("email", e?.email);
        formData.append("phone", e?.phone);
        formData.append("message", e?.message);
        formData.append("project_location", e?.project_location);
        formData.append("project_type", selectType?.label);
        formData.append("form_id", "contact-form");

        if (e.name !== "" && e.phone !== "") {
                // try {
                //     const response = await fetch(api_services, {
                //         method: 'POST',
                //         body: formData
                //     });
                //     success('Form Submitted Successfully');
                //     if (!response.ok) {
                //         throw new Error('Failed to submit form');
                //         error('please fill out the correct inputs');
                //     }
                //     reset();
                // } catch (error) {
                //     console.error('Error submitting form:', error.message);
                //     // Handle error
                // }

            await dispatch(postForm([api_services, formData]));
        }
    };

    useEffect(() => {
        if (!store?.loading) {
            if (isSubmitSuccessful) {
                success("Thank you for your message");
                reset();
            }
        }
    }, [isSubmitSuccessful, store]);

    let count = 0;

    const onError = (errors) => {
        Object.values(errors).forEach((error) => {
            count++;
        });
        if (count > 0) {
            toast.error("please fill out the correct inputs");
        }
        count = 0;
    };


    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                            <Col sm={{span: 10, offset: 1}} className={'text-center'}>
                                <div className="form-area__form__title">
                                    {data?.section_data?.title &&
                                        <h2 className={'split-up'}>{data?.section_data?.title}</h2>}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{span: 10, offset: 1}}>
                                <Form onSubmit={handleSubmit(onSubmit, onError)} className={'form'}>
                                    <Row>
                                        <input name={"spam_protector"} type="hidden"/>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Name*</Form.Label>
                                            <Form.Control
                                                className={
                                                   errors?.name?.message
                                                        ? "has-error form-control-lg"
                                                        : "form-control-lg"
                                                }
                                                {...register("name", {
                                                    required: "Name is required",
                                                })}
                                                type="text"
                                                placeholder="Enter your name*"
                                            />
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Phone Number*</Form.Label>
                                            <Form.Control
                                                className={
                                                    errors?.phone?.message
                                                        ? "has-error form-control-lg"
                                                        : "form-control-lg"
                                                }
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "please enter your phone number",
                                                    },
                                                    pattern: {
                                                        value: /^01[0-9]{9}$/,
                                                        message: "please enter a valid 11 digit phone number",
                                                    },
                                                })}
                                                type="text"
                                                placeholder="Enter your phone number*"
                                            />
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Email (optional)</Form.Label>
                                            <Form.Control
                                                {...register("email", {

                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "please enter a valid email address",
                                                    },
                                                })}
                                                type="email"
                                                placeholder="Enter your email address"
                                            />
                                        </Col>
                                        <Col className={'form__item'} md={6} xs={12}>
                                            <Form.Label>Project Type (Optional)</Form.Label>

                                            <Select {...register("project_type", {
                                                required: {
                                                    // value:true,
                                                    message: "Select projects type",
                                                },
                                            })} components={{DropdownIndicator}}
                                                    styles={customStyles}
                                                    classNamePrefix={'custom'} className='select-here '
                                                    placeholder={'Select projects type'}
                                                    options={status} value={selectType} onChange={(selectedOption) => setSelectType(selectedOption)}/>

                                        </Col>
                                        <Col className={'form__item'} md={12} xs={12}>
                                            <Form.Label>Project Location (Optional)</Form.Label>
                                            <Form.Control
                                                className={
                                                    errors?.location?.message
                                                        ? "has-error form-control-lg"
                                                        : "form-control-lg"
                                                }
                                                {...register("project_location", {})}
                                                type="text  "
                                                placeholder="Enter project location"
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={6} // This sets the number of visible rows, adjust as needed
                                                style={{height: '180px'}} // Custom style for the height
                                                className={`${errors?.message?.message ? "has-error form-control-lg" : "form-control-lg "} cover-letter`}
                                                {...register("message")}
                                                placeholder="Message"
                                            />
                                        </Col>

                                        <Col className={'form__item'} md={6} xs={12}>
                                            <div onClick={handleSubmit(onSubmit, onError)} className="button">
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

  .select-here .custom__control {
    margin: 0;
  }

  textarea, .form-control {
    height: auto;
    background: transparent;
    border-radius: 20px;
    padding: 20px;
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    &:focus {
      border: 1px solid #D0DEDE;
    }
  }

  .form-area input.cover-letter.form-control {
    padding-top: unset;
  }

  .custom__control {
    background-color: transparent;
    border: 1px solid #D0DEDE !important;
    box-shadow: none;
    outline: none !important;
    cursor: pointer;
    //margin-bottom: 60px;
    margin-bottom: 20px;
    border-radius: 50px!important;
    height: 60px;
    padding: 0 24px 0 30px;

    .custom__indicator-separator {
      display: none;
    }

    .custom__value-container {
      padding: 0 !important;
      //height: 60px;
    }

    .css-qbdosj-Input {
      margin: 0;
      padding: 0;
    }

    .custom__placeholder,.custom__single-value{
      top: 42% !important;
    }
    .custom__indicator{
      top: -3px;
    }

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

    &--is-focused {

    }
  }

`;

export default GetInTouch;
