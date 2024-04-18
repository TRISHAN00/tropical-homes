import React from 'react';
import styled from "styled-components";
import * as MessengerData from '/Messenger.json';
import * as WhatsappData from '/whatsapp.json';

import Lottie from 'react-lottie';

const MyComponent = () => {
    const msgOptions = {
        loop: true,
        autoplay: true,
        animationData: MessengerData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const whatsOptions = {
        loop: true,
        autoplay: true,
        animationData: WhatsappData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    

    return (
        <StyledComponent className={'social-icons'}>
            <div className="messenger">
                <a target={'_blank'} href="https://wa.me/01730000000/?text=Hello"/>
                <Lottie options={whatsOptions}
                        height={70}
                        width={70}/>
            </div>
            {/*<div className="whatsapp">*/}
            {/*    <Lottie options={msgOptions}*/}
            {/*            height={50}*/}
            {/*            width={50}/>*/}
            {/*</div>*/}

        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  display: flex;
  flex-direction: column;

  .messenger {
    background: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: 1px solid #BEC7C7;
    overflow: hidden;

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
    }
  }

  .whatsapp {
    background: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 615px) {
    right: 15px !important;
  }
`;

export default MyComponent;
