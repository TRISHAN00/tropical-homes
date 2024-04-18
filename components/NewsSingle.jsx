import React, {memo} from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import {hover, title} from '../styles/globalStyleVars'
import reactHtmlParser from "react-html-parser";
import Link from "next/link";

const MyComponent = ({title, shortDesc, img, slug, day, month, year}) => {
    return (
        <StyledComponent>
            <div className="blog-single">
                <div className="blog-single__inner">
                    <Link href={`/news/${slug}`}><a/></Link>
                    <Img
                        src={img}
                        objectFit={'cover'} layout={'fill'}/>
                    <div className="blog-single__inner__content">
                        <div className="blog-single__inner__content__top">
                            <p>{reactHtmlParser(title ? title : 'Discussing the present situation and prospects of the real estate business.')}</p>
                            <h2>{reactHtmlParser(shortDesc ? shortDesc : 'Congratulations to the marketing team for their great achivement.')}</h2>

                        </div>

                        <div className="blog-single__inner__content__bottom">
                            <h4>{day}</h4>
                            <p>{month}
                                <span>{year}</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .blog-single {
    .blog-single__inner {
      padding-top: calc(460 / 370 * 100%);
      position: relative;

      a {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 3;
      }

      &__content {
        &:after {
          content: '';
          height: 100%;
          width: 100%;
          background-color: #E1E4E6;
          top: 0;
          left: 0;
          right: 0;
          position: absolute;
          transition: height .4s ease;
          @media (max-width: 600px) {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }

        &__top {
          p {
            font-size: 16px;
            line-height: 21px;
            color: #ffffff;
            position: absolute;
            left: 40px;
            top: 40px;
            z-index: 2;
            right: 40px;
            margin: 0;
            transform: translateY(-30px);
            opacity: 0;
            transition: all .6s ease;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }

          h2 {
            position: absolute;
            top: 40px;
            left: 40px;
            right: 40px;
            z-index: 2;
            font-size: 24px;
            line-height: 32px;
            margin: 0;
            transition: all .3s ease;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            @media (max-width: 600px) {
              color: #ffffff;
            }
          }
        }

        &__bottom {
          position: absolute;
          margin: 0;
          left: 40px;
          right: 40px;
          bottom: 24px;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #1D3130;
          padding-top: 20px;
          z-index: 2;
          @media (max-width: 600px) {
            border-color: #ffffff;
          }

          h4 {
            font-size: 60px;
            font-weight: 300;
            color: ${hover};
            line-height: 60px;
            transition: color .3s ease;
            font-family: ${title};
            @media (max-width: 600px) {
              color: #ffffff;
            }
          }

          p {
            font-size: 14px;
            color: ${hover};
            text-align: right;
            line-height: 20px;
            transition: color .3s ease;
            @media (max-width: 600px) {
              color: #ffffff;
            }

            span {
              display: block;
              color: ${hover};
              @media (max-width: 600px) {
                color: #ffffff;
              }
            }
          }
        }
      }

      &:hover {
        .blog-single__inner__content__top {
          h2 {
            opacity: 0;
            transform: translateY(-20px);
          }

          p {
            transform: none;
            opacity: 1;
          }
        }

        .blog-single__inner__content__bottom {
          border-color: #FFF;

          h4 {
            color: #ffffff;
          }

          p {
            color: #ffffff;

            span {
              color: #ffffff;
            }
          }
        }
      }
    }

    &:hover {
      .blog-single__inner__content:after {
        height: 0;
      }
    }


    @media (max-width: 767px) {
      .blog-single__inner__content__top {
        p, h2 {
          left: 30px;
          right: 30px;
          top: 30px;
        }
      }

      .blog-single__inner__content__bottom h4, .blog-single__inner__content__bottom p {
        left: 30px;
        right: 30px;
        top: 30px;
      }

    }
  }
`;

export default memo(MyComponent);
