import React from 'react';
import styled from "styled-components";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Select, {components} from "react-select";
import {text} from "../styles/globalStyleVars";


const LocationDropdown = () => {

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
                        <img src="/images/static/caret-up.svg" alt="up"/>
                        :
                        <img src="/images/static/caret-down.svg" alt="down"/>
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
    const type = [
        {value: 'completed', label: 'Residential'},
        {value: 'ongoing', label: 'Commercial'},
    ];
    const location = [
        {value: 'completed', label: 'Banani'},
        {value: 'ongoing', label: 'Mirpur'},
    ];


    return (
        <StyledComponent className={'feature-slider'}>
            <Select components={{DropdownIndicator}}
                    styles={customStyles}
                    classNamePrefix={'custom'} className='select-here '
                    placeholder={'Project Status'}
                    options={status}/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  
  //caret
  .custom__control {
    background-color: transparent;
    border: 1px solid #D0DEDE !important;
    box-shadow: none;
    outline: none !important;
    cursor: pointer;
    //margin-bottom: 60px;
    margin-bottom: 20px;
    border-radius: 50px;
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
    border-color: #FFF;
  }

  .custom__indicator-separator {
    display: none;
  }

  .custom__indicator {
    padding-right: 0;
  }

  .project-search {
    //margin-bottom: 100px;
    a {
      border: 1px solid #FFF;
      border-radius: 50px;
      width: 100%;
      height: 50px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 2;

      img {
        margin-left: 10px;
        position: relative;
        z-index: 2;
        transition: .3s ease;
      }

      &.hover:after {
        background-color: #fff;
      }

      &:hover {
        color: ${text} !important;

        img {
          filter: invert(100%) sepia(0%) saturate(7468%) hue-rotate(132deg) brightness(98%) contrast(106%);
        }
      }
    }
  }

  @media (max-width: 991px) {
    .project-search {
      .col-md-3 {
        min-width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    .project-search {
      margin-top: 80px;
    }
  }
`;


export default LocationDropdown;
