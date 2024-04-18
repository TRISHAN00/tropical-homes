import React from 'react';
import styled from "styled-components";


const MyComponent = () => {
    return (
        <StyledComponent className={"float-icon"}>
            <div className="icon">
                <ul>
                    <li><a target={"_blank"} href="https://wa.me/01329713686/?text=Hello"><img height={23} width={23}
                        src="/images/static/whatsapp.png" alt=""/></a>
                    </li>
                    {/*<li><a href=""><img src="/images/static/messenger.png" alt=""/></a></li>*/}
                </ul>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .icon {
    position: fixed;
    right: 24px;
    bottom: 75px;
    z-index: 9;

    li {
      a {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        img {
          height: 23px;
        }
      }


      &:nth-of-type(1) {
        margin-bottom: 20px;
      }
    }
  }
`;

export default MyComponent;
