import styled from "styled-components";
import {hover} from "../styles/globalStyleVars";

export const Loading = () => {
    return (
        <>
            <StyledLoader className='loading'>
                <div className="loading__spin"/>
            </StyledLoader>
        </>

    )
};

const StyledLoader = styled.div`

  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  .loading__spin {
    position: fixed;
    width: 50px;
    height: 50px;
    border: 5px solid #FFF;
    border-top-color: ${hover};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

`