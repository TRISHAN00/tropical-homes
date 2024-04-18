import {createGlobalStyle, css} from 'styled-components';
import {hover, hoverNd, text, title} from './globalStyleVars';

function createCSS() {
    let styles = '';

    for (let i = 2; i < 20; i += 1) {
        styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * .12}s;
        }
     `
    }

    for (let a = 2; a < 100; a += 1) {
        styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * .03}s;
        }
     `
    }

    return css`${styles}`;
}

export default createGlobalStyle`

    ${createCSS()}
    #root {
        min-height: 100vh;
        overflow-x: hidden;
    }

    @font-face {
        font-family: 'Arial';
        src: url('/fonts/Arial.woff2') format('woff2'),
        url('/fonts/Arial.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'HvDTrial Palast Poster';
        src: url('/fonts/HvDTrial_PalastPoster-Light.woff2') format('woff2'),
        url('/fonts/HvDTrial_PalastPoster-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'HvDTrial Palast Poster';
        src: url('/fonts/HvDTrial_PalastPoster-Regular.woff2') format('woff2'),
        url('/fonts/HvDTrial_PalastPoster-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }


    body {
        font-family: 'Arial', Helvetica, freesans, sans-serif !important;
        font-style: normal;
        margin: 0;
        color: ${text};
        padding: 0;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        font-size: 16px;
        line-height: 24px;
        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 21px;
        }
    }

    a {
        transition: color .3s ease;
        text-decoration: none;

        &:hover {
            color: ${hover} !important;
            text-decoration: none;
            outline: none;
            box-shadow: none;
        }

        &:focus {
            text-decoration: none;
            outline: none;
            box-shadow: none;
            color: ${text};
        }
    }

    ::selection {
        background: ${hover};
        color: #FFF;
    }

    p, a, h4, h3, h5, h6 {
        color: ${text};
        font-weight: 400;
        margin: 0;
    }

    h1, h2 {
            //font-family: ${title};
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        object-fit: contain;
    }


    .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
        outline: none;
        box-shadow: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid #D0DEDE;
        -webkit-text-fill-color: #FFFFFF;
        -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
        transition: background-color 5000s ease-in-out 0s;
    }


    table {
        width: 100%;
    }

    form div {
        position: relative;
    }

    .form-control {
        box-shadow: none;
        outline: 0;
        border-radius: 0;

        &:focus {
            box-shadow: none;
        }
    }

    .p-0 {
        padding: 0 !important;
    }

    .pl-0 {
        padding-left: 0;
    }

    .pr-0 {
        padding-right: 0;
    }

    .pt-200 {
        padding-top: 200px;
        @media (max-width: 767px) {
            padding-top: 130px;
        }
    }

    .pb-200 {
        padding-bottom: 200px;
        @media (max-width: 767px) {
            padding-bottom: 130px;
        }
    }

    .pt-150 {
        padding-top: 150px;
        @media (max-width: 767px) {
            padding-top: 80px;
        }
    }

    .pb-150 {
        padding-bottom: 150px;
        @media (max-width: 767px) {
            padding-bottom: 80px;
        }
    }

    .pb-120 {
        padding-bottom: 130px;
        @media (max-width: 767px) {
            padding-bottom: 40px;
        }
    }

    .pt-120 {
        padding-top: 120px;
        @media (max-width: 767px) {
            padding-bottom: 40px;
        }
    }

    .pt-100 {
        padding-top: 100px;
        @media (max-width: 767px) {
            padding-top: 60px;
        }
    }

    .pb-100 {
        padding-bottom: 100px;
        @media (max-width: 767px) {
            padding-bottom: 60px;
        }
    }

    .pt-80 {
        padding-top: 80px;
        @media (max-width: 767px) {
            padding-top: 40px;
        }
    }

    .pb-80 {
        padding-bottom: 80px;
        @media (max-width: 767px) {
            padding-bottom: 40px;
        }
    }

    .gm-control-active > img {
        top: 25%;
    }

    .input-map {
        position: absolute;
        content: '';

    }

    .MuiDrawer-paper {
        width: 500px !important;
        padding: 20px;
        @media (max-width: 767px) {
            width: 100% !important;
        }
    }


    .swiper-button-disabled {
        opacity: .4 !important;
    }

    @media (min-width: 1500px) {
        .container {
            //min-width: 1366px;
            min-width: 80%;
            margin: auto;
        }
    }

    @media (max-width: 1199px) and (min-width: 768px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 90%;
            margin: auto;
        }
    }


    @media (max-width: 767px) {
        .container, .container-sm {
            max-width: 100%;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }


    //react select
    .css-yk16xz-control, .css-1pahdxg-control {
        height: 50px;
        border-radius: 0 !important;
        padding-left: 5px;
        font-size: 16px;
        outline: none !important;
        border-color: #D9D9D9 !important;
        box-shadow: none !important;

        .css-1wa3eu0-placeholder {
            font-weight: 300;
            line-height: 21px;
            color: rgba(0, 0, 0, 0.5);
            outline: none;
        }

        .css-1okebmr-indicatorSeparator {
            display: none;
        }

        .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
            margin-right: 10px;
        }
    }

    .css-2613qy-menu {
        border-radius: 0 !important;
        margin-top: 0 !important;
    }

    //animation class


    .info-window {
        max-width: 200px;
    }

    .gm-style-iw {
        border-radius: 0 !important;
    }

    .swiper-pagination-bullet {
        outline: none;
    }

    .css-nmuc1a-menu {
        z-index: 5 !important;
    }


    .map-info__img {
        img {
            height: 100px;
            margin-bottom: 12px;
            object-fit: cover;
        }
    }

    .map-info__content {
        h4 {
            font-size: 20px;
        }

        p {
            margin-bottom: 5px;
        }
    }


    .overlay {
        position: fixed;
        height: 100vh;
        width: 100%;
        //background-color: rgba(0,0,0,0.5);
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        display: none;

        &.show {
            display: block;
        }
    }

    .form-control.has-error {
        border-color: #dc004e !important;
    }

    .has-error .find-retainer-filter__control {
        border-color: #dc004e !important;
    }

    //preloader
    .content-loader {
        position: absolute;
        height: 70%;
        width: 70%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loading-before-submit {
        position: fixed;
        height: 100vh;
        width: 100%;
        bottom: 0;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.65);
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 40px;
        }
    }


    .swiper-slide {
        height: auto;
    }

    .slick-slide {
        div {
            outline: none !important
        }
    }

    button, button:active, button:focus, button:focus-visible {
        outline: none !important;
        box-shadow: none !important;
    }


    .hover {
        position: relative;
        overflow: hidden;

        span {
            z-index: 2;
        }

        &:after {
            content: '';
            position: absolute;
            height: 0;
            width: 0;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            background-color: ${hover};
            transition: all .5s ease;
            border-radius: 19px;
        }

        &:hover {
            &:after {
                height: 100%;
                width: 100%;
            }
        }
    }


    .modal-backdrop {
        background-color: rgb(34 31 31 / 90%);
        min-width: 100%;
        //z-index: 9999;

        &.show {
            opacity: 1;
        }
    }


    .valid {
        color: ${hover};
        position: absolute;
        font-size: 12px;
        top: 44px;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }


    //menu fixed
    .scroll-down .main-menu {
        transform: translate3d(0, -150%, 0);

    }

    .scroll-up, .on-blog {

        .main-menu {
            background-color: ${hoverNd};
            padding: 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.13);

            img:not(ul img) {
                height: 55px;
            }

            &__top {
                li ul {
                    top: 80px !important;
                }
            }
        }
    }

    .form-control:disabled {
        background-color: transparent;
    }

    @media (max-width: 600px) {
        .prevent-overflow {
            overflow: hidden;
            height: 100vh;
        }
    }

    .Toastify__toast-container {
        z-index: 99999999;
    }

    .mobile-menu {
        #fb-root, .fb_reset {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
    }

    .slick-slide {
        -webkit-transform: translate3d(0, 0, 0);
    }

    .reveal, .revealFast {
        overflow: hidden;
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;

        img {
            transform-origin: left;
        }

        .global-image {
            background: transparent;
        }
    }

    //calender
    ._3efP_GeH5kyBAzqnLzL._kN_bCa3VNYpqFLH311L {
        border-radius: 0 !important;
    }

    //video modal 
    .modal-video-close-btn:before, .modal-video-close-btn:after {
        background-color: ${hover};
    }

    .page-loader {
        position: fixed;
        background-color: ${hoverNd};
        width: 100vw;
        z-index: 999999999;
        overflow: hidden;
        //opacity: 0;
        //height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        //display: none !important;
        //left: 0; //width: 0;
        //transition: all 2.6s ease;
        //.anim-logo {
        //  width: 130px;
        //  overflow: hidden;
        //  height: fit-content;
        //  position: absolute;
        //  left: 0;
        //  right: 0;
        //  top: 0;
        //  bottom: 0;
        //  opacity: 0;
        //  margin: auto;
        //  z-index: 2;
        //
        //  img {
        //    height: 55px;
        //  }
        //}

        //.hide-logo {
        //  background-color: #010A1A;
        //  width: 50%;
        //  height: 100vh;
        //  top: 0;
        //  left: 0;
        //  right: 0;
        //  margin: auto;
        //  position: absolute;
        //  z-index: 999;
        //}

        .pre-loader__img {
            //position: fixed;
            height: 100px;
            width: 100px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgb(36, 24, 67);
            z-index: 99999999;

            //flex: 1;
            margin: auto;
            opacity: 0;

            img {
                display: block;
            }

            .top {
                height: 8px;
            }

            .bottom {
                height: 30px;
                margin-top: 5px;
                animation: flip 1s linear infinite;
            }

            @keyframes flip {
                0% {
                    transform: rotateY(0deg)
                }
                100% {
                    transform: rotateY(180deg)
                }
            }
        }

    }

    //------------------------animation
    .split-up {
        width: 100%;

    }

    //text animation 
    .split-parent {
        overflow: hidden;

    }

    .split-child {
        overflow: hidden;

    }


    .reveal {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        img {
            transform-origin: left;
        }

        .global-image {
            background: transparent;
        }
    }


    //page transition
    .page-transition {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: ${hover};
        z-index: 999999999;
        display: none;
        opacity: 0;
        //display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            height: 80px;
            opacity: 0;
        }
    }

    .slider-nav {
        display: flex;

        li {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: 1px solid #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
            z-index: 2;

            img {
                position: relative;
                z-index: 2;
                transition: .5s ease;
            }

            &:after {
                content: '';
                position: absolute;
                height: 0%;
                width: 0%;
                inset: 0;
                margin: auto;
                background-color: #fff;
                border-radius: 50%;
                transition: .5s ease;
            }

            &:hover {
                &:after {
                    height: 100%;
                    width: 100%;
                }

                img {
                    filter: invert(160%) sepia(60%) saturate(7450%) hue-rotate(354deg) brightness(86%) contrast(60%)
                }
            }
        }
    }

    .slider-nav {

        li {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: 1px solid #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
            z-index: 2;

            img {
                position: relative;
                z-index: 2;
                transition: .5s ease;
            }

            &:after {
                content: '';
                position: absolute;
                height: 0%;
                width: 0%;
                inset: 0;
                margin: auto;
                background-color: #fff;
                border-radius: 50%;
                transition: .5s ease;
            }

            &:hover {
                &:after {
                    height: 100%;
                    width: 100%;
                }

                img {
                    filter: invert(160%) sepia(60%) saturate(7450%) hue-rotate(354deg) brightness(86%) contrast(60%)
                }
            }
        }
    }

    .hover {
        position: relative;

        &:after {

        }
    }

    //  Form Style
    .form-area {
        padding: 150px 0px;
        /* small mobile :320px. */
        @media (max-width: 767px) {
            padding-top: 60px;
            padding-bottom: 80px;
        }

        &__form {
            &__title {
                h2 {
                    font-size: 40px;
                    line-height: 48px;
                    font-weight: 300;
                    color: #FFFFFF;
                    font-family: ${title};
                    text-transform: uppercase;
                    text-align: left;
                    padding-bottom: 40px;
                }

                /* small mobile :320px. */
                @media (max-width: 767px) {
                    h2 {
                        font-size: 32px;
                        line-height: 40px;
                    }
                }
            }
        }

        .form {
            &__item {
                padding-bottom: 30px;
                /* small mobile :320px. */
                @media (max-width: 767px) {
                    padding-bottom: 20px;
                }
            }

            input {
                background-color: transparent;
                border: 1px solid #D0DEDE;
                height: 60px;
                border-radius: 50px;
                padding: 0px 30px;
                color: #fff;

                ::placeholder {
                    color: rgba(255, 255, 255, 0.5) !important;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                }
            }

            input[type="textarea"] {
                padding-bottom: 180px;
                border-radius: 20px;
            }

            label {
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
                color: rgba(255, 255, 255, 0.5);
            }

            label.resume-upload-label {
                border: 1px dashed #D0DEDE;
                padding: 18px 30px;
                border-radius: 50px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: #fff;
                text-align: center;
                text-transform: uppercase;
            }

            .file-name {
                border: 1px dashed #D0DEDE;
                display: flex;
                align-items: center;
                padding: 20px 30px;
                border-radius: 50px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: #fff;
                justify-content: center;
            }

            span {
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
                color: rgba(255, 255, 255, 0.5);
            }

            .button {
                padding-top: 30px;
                /* small mobile :320px. */
                @media (max-width: 767px) {
                    padding-top: 20px;
                }
            }

            @media (max-width: 767px) {
                .dc-btn {
                    width: 100%;
                }
            }
        }

        input.cover-letter.form-control {
            padding-top: 30px;
        }
    }

    textarea.form-control {
        background: transparent;
        border-radius: 20px;
        padding: 20px;
        color: #fff;
        height: 180px;

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


    //  go top
    .go-top {
        position: fixed !important;
        width: fit-content;
        height: fit-content;
        content: "";
        bottom: 30px;
        z-index: 99999 !important;
        transform: rotate(180deg);
        cursor: pointer;
        @media (max-width: 767px) {
            left: 15px;
        }
    }

    .social-icons {
        position: fixed;
        content: '';
        z-index: 99;
        bottom: 30px;
        right: 30px;
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    .menu-open {
        height: 100vh;
        overflow: hidden;

        .main-menu {
            //background-color: #1D3130;
            //background-image: url('/images/static/mission-bg.png');
            //background-blend-mode: multiply;
            //border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            //transition: 1.5s ease;

            //&:before {
            //  content: '';
            //  position: absolute;
            //  height: 100%;
            //  width: 100%;
            //  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            //  background-image: url('/images/static/mission-bg.png');
            //}
            //
            //&:after {
            //  content: '';
            //  position: absolute;
            //  height: 100%;
            //  width: 100%;
            //  background-color: rgba(0, 0, 0, 0.23);
            //}
            &:before, &:after {
                opacity: 1;
                transition-delay: .2s;
            }
        }

        .hamburger img {
            &:nth-last-of-type(1) {
                display: block !important;
            }

            &:nth-last-of-type(2) {
                display: none !important;
            }
        }

        .go-top, .go-down, .social-icons {
            display: none !important;
        }

    }

    //video modal
    .modal-video {
        background-color: transparent;
        height: 100vh;
        z-index: 99999;

        .modal-dialog {
            height: 100vh;
            background-color: transparent;
            min-width: 100%;
            margin: 0;
        }

        .modal-body {
            height: 100vh;
        }

        .modal-content {
            background-color: transparent;

        }

        iframe {
            height: 60vh;
            width: 60vw;
            margin: auto;
            position: absolute;
            inset: 0;
        }

        .close-modal {
            position: absolute;
            top: 40px;
            right: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 99;
        }

        @media (max-width: 768px) {
            .modal-content {
                //padding: 0 20px;

                iframe {
                    width: 90vw;
                    height: 60vh;
                }

                .close-modal {
                    top: 80px;
                    right: 20px;
                }
            }
        }
        @media (max-width: 550px) {
            .modal-content iframe {
                width: 90vw;
                height: 40vh;
            }
        }
    }

    .form-control.has-error {
        border-color: #c70000 !important
    }

    .no-need {
        display: none !important;
    }

    .custom--is-disabled {
        opacity: 0.5;
    }

    .project-show {
        display: block !important;
    }

    .custom__input-container {
        padding: 0 !important;
        margin: 0 !important;
    }

    .parallax-image {
        display: flex;
        height: 100%;
        width: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;

        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    #smooth-content {
        will-change: transform;
    }
    .menu-bg-color{
    background-color: rgba(0, 0, 0, 0.23);
        padding-top: 0;
    }
`;

