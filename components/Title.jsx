import React from 'react';
import styled from 'styled-components';
import {text, title} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   center,
                   classname,
                   small_text,
                   marginSm,
                   width
               }) => {


    return (

        <StyledTitle marginSm={marginSm} className={`title ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     width={width}
                     borderColor={borderColor}>
            {text && <h2 className={'split-up'}>{ReactHtmlParser(text)} </h2>}


        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px 0 0px 0'};
  position: relative;
  width: ${p => p.width || 'fit-content'};
  font-family: ${title};
  text-align: ${props => props?.center ? 'center' : ''};

  h2 {
    font-size: ${props => props.fontSize || 48}px;
    line-height: ${props => props.lineHeight || 60}px;
    text-transform: uppercase;
    font-weight: 300;
    color: ${props => props.color || text};
  }


  @media (max-width: 767px) {
    margin-bottom: ${p => p.marginSm || '30px'};
    padding: 0;
    h2 {
      font-size: 32px !important;
      line-height: 40px !important;
    }
  }
`;


export default React.memo(Title);














