import React, {memo} from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import Link from "next/link";

const MyComponent = ({img, title, address, slug, catId, className}) => {
    return (
        <StyledComponent
            className={className ? `${className} project-single` : 'projects-single'}>

            {/*{catId !== '11' || catId === 'completed' && <Link to={`/projects/${slug}`}/>}*/}
            {catId !== 'completed' && <Link href={`/projects/${slug}`}><a/></Link>}
            <div className="project-single__img">
                <Img transition src={img}/>
            </div>
            <div className="project-single__content">
                <h4>{title} </h4>
                <p>{address}</p>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;

  a {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .project-single__img {
    padding-top: calc(460 / 370 * 100%);
    position: relative;

  }

  .project-single__content {
    margin-top: 25px;

    h4 {
      font-size: 24px;
      line-height: 32px;
      color: #FFFFFF;
      margin-bottom: 5px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }

  &:hover {
    img {
      transform: scale(1.04);
    }
  }
`;

export default memo(MyComponent);
