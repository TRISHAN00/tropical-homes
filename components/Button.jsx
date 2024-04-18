import React from 'react';
import styled from 'styled-components';
import {hover} from "../styles/globalStyleVars";
import Link from "next/link";


const Button = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    hoverColor,
                    hoverBorderColor,
                    className,
                    handleLoadMore
                }) => {


    return (
        <StyledBtn className={`${className ? className : ''} dc-btn fade-up`}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
                   hoverColor={hoverColor}
                   onSubmit={onSubmit}
        >
            {src ? (
                <Link onClick={handleLoadMore} href={src || '/'}>
                    <a>
                        <span> {text ? text : 'explore'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.414" viewBox="0 0 17 17.414">
                            <g id="Group_21288" data-name="Group 21288" transform="translate(-1538.5 1033.707)">
                                <g id="Group_21287" data-name="Group 21287"
                                   transform="translate(829.643 -975) rotate(-90)">
                                    <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                                          transform="translate(-1434.925 -0.643)" fill="none" stroke="#1d3130"
                                          stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    <path id="Path_5048" data-name="Path 5048" d="M1486.828,704.357v15.357"
                                          transform="translate(-1436.828 5)" fill="none" stroke="#1d3130"
                                          stroke-linecap="round" stroke-width="1"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </Link>
            ) : (
                <a onClick={handleLoadMore} target={target || '_self'}>
                    <span>{text ? text : 'explore'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.414" viewBox="0 0 17 17.414">
                        <g id="Group_21288" data-name="Group 21288" transform="translate(-1538.5 1033.707)">
                            <g id="Group_21287" data-name="Group 21287" transform="translate(829.643 -975) rotate(-90)">
                                <path id="Path_5047" data-name="Path 5047" d="M1476.925,718l8,8,8-8"
                                      transform="translate(-1434.925 -0.643)" fill="none" stroke="#1d3130"
                                      stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <path id="Path_5048" data-name="Path 5048" d="M1486.828,704.357v15.357"
                                      transform="translate(-1436.828 5)" fill="none" stroke="#1d3130"
                                      stroke-linecap="round" stroke-width="1"/>
                            </g>
                        </g>
                    </svg>
                </a>
            )}
        </StyledBtn>
    )
};

const StyledBtn = styled.div`
    &.dc-btn {
        margin: ${props => props.margin || '0'};
        width: ${props => props.width || 'fit-content'};
        height: ${props => props.height || '47'}px;
        cursor: pointer;

        a {
            display: flex;
            width: fit-content;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: ${props => props.fontSize || '16'}px;
            font-weight: ${props => props.fontWeight || 600};
            margin: 0;
            line-height: ${props => props.lineHeight || '20'}px;
            background-color: ${props => props.background || `transparent`};
            position: relative;
            border-radius: ${props => props.borderRadius || '24'}px;
            overflow: hidden;
            z-index: 0;
            transition: border .3s ease;
            padding: 16px 30px;
            box-sizing: border-box;
            border: 1px solid ${p => p.color || '#1D3130'};

            span {
                transition: color .3s ease;
                color: ${props => props.color || `#1D3130`};
                position: relative;
                z-index: 2;
                font-weight: 400;
                font-size: 15px;
                line-height: 24px;
                margin-right: 10px;
                text-transform: capitalize;
            }

            svg {
                transition: .4s ease;
                transform: rotate(-45deg);

                path {
                    stroke: ${props => props.color || `#1D3130`};
                }
            }


            &:hover {
                svg {
                    transform: none;
                }
            }

            &:focus {
                color: #222222;
            }
        }
    }

`;


export default Button;
