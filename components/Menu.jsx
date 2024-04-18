import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col, Accordion} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import Link from "next/link";
import {CSSPlugin, gsap, TimelineLite} from "gsap";
import {useRouter} from "next/router";


const MyComponent = () => {
    gsap.registerPlugin(CSSPlugin)
    const location = useRouter();
    // menu fixed on scroll
    useEffect(() => {
        if (document.body.classList.contains('scroll-down')) {
            document.body.classList.remove('scroll-down');
        }
    });

    useEffect(() => {
        const body = document.body;
        const scrollUp = 'scroll-up';
        const scrollDown = 'scroll-down';
        let lastScroll = 0;
        let howMuchScroll;

        if (window.screen.width < 991) {
            howMuchScroll = 150;
        } else {
            howMuchScroll = 150;
        }

        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset;

            if (currentScroll <= howMuchScroll) {
                body.classList.remove(scrollUp);
                body.classList.remove(scrollDown);
                return;
            }

            if (currentScroll > lastScroll && currentScroll > howMuchScroll) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (currentScroll < lastScroll && currentScroll > howMuchScroll) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }

            lastScroll = currentScroll;
        });
    }, []);


    // menu action
    useEffect(() => {
        const tl = new TimelineLite()

        document.querySelector('.hamburger').addEventListener('click', function () {
            if (document.body.classList.contains('menu-open')) {
                document.body.classList.remove('menu-open')
                tl.to('.main-menu__slide', .5, {
                    x: '100%',
                    alpha: 0
                }).to('.main-menu__slide', .2, {
                    display: 'none'
                })
            } else {
                document.body.classList.add('menu-open')
                tl.to('.main-menu__slide', .2, {
                    display: 'block'
                }).to('.main-menu__slide', .5, {
                    x: 0,
                    alpha: 1
                })
            }

        });

        const getAllA = document.querySelectorAll('a')
        getAllA.forEach(e => {
            e.addEventListener('click', function () {
                document.body.classList.remove('menu-open')
                tl.to('.main-menu__slide', .5, {
                    x: '100%',
                    alpha: 0
                }).to('.main-menu__slide', .2, {
                    display: 'none'
                })
            });
        })

    }, [])


    useEffect(() => {
        const getAlla = document.querySelectorAll('.main-menu__top');
        const getAllul = document.querySelectorAll('.main-menu__top li ul');
        getAlla.forEach(e => {
            const tl = new TimelineLite()

            e.addEventListener('click', function () {
                gsap.to('.main-menu__top li ul', {
                    display: 'none',
                    duration: 0
                })

                setTimeout(() => {
                    getAllul.forEach(e => {
                        e.removeAttribute('style')
                    })
                }, 600)


            });
        })
    }, [])

    return (
        <StyledComponent className={`main-menu`}>
            <Container>
                <Row>
                    <Col className={'main-menu__logo'}>
                        <Link href={'/'}><a><img height={70} width={117} src="/images/static/logo.svg"
                                                 alt=""/></a></Link>
                    </Col>

                    <Col>
                        <ul className={'main-menu__top'}>
                            <li className={location.pathname === '/' ? 'active' : ''}><Link href={'/'}>
                                Home
                            </Link></li>
                            <li className={location.pathname === '/about' ? 'active' : ''}><Link
                                href={'/about'}> About </Link>
                                <ul>
                                    <li><Link href={'/about#our-story'}>Our Story</Link></li>
                                    <li><Link href={'/about#vision'}>Vision</Link></li>
                                    <li><Link href={'/about#mission'}>Mission</Link></li>
                                    <li><Link href={'/about#values'}>Values</Link></li>
                                    <li><Link href={'/about#chairman-message'}>Message from Chairman</Link></li>
                                    <li><Link href={'/about#message-from-managing-director'}>Message from MD</Link></li>
                                    <li><Link href={'/about#board-of-directors'}>Board of Directors</Link></li>
                                </ul>
                            </li>
                            <li className={location.pathname.startsWith('/projects') ? 'active' : ''}><Link
                                href={'/projects'}> Projects </Link>
                                <ul>
                                    <li><Link href={'/projects?status=ready'}>Ready</Link></li>
                                    <li><Link href={'/projects?status=ongoing'}>Ongoing</Link></li>
                                    <li><Link href={'/projects?status=upcoming'}>Upcoming</Link></li>
                                    <li><Link href={'/projects?status=completed'}>Completed</Link></li>
                                </ul>
                            </li>
                            <li className={location.pathname === '/landowners' ? 'active' : ''}><Link
                                href={'/landowners'}>Landowners</Link></li>
                            <li className={location.pathname === '/news' ? 'active' : ''}><Link href={'/news'}>News &
                                Events</Link></li>
                            <li><a
                                href={'https://blog.tropicalhomesltd.com/'}>Blog</a></li>
                            <li className={location.pathname === '/career' ? 'active' : ''}><Link
                                href={'/career'}>Career</Link></li>
                            <li className={location.pathname === '/contact' ? 'active' : ''}><Link
                                href={'/contact'}>Contact</Link></li>
                            <li className={'hamburger'}>
                                <img loading={"lazy"} src="/images/static/hamburger.svg" alt=""/>
                                <img loading={"lazy"} src="/images/static/close.svg" alt=""/>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/*slide item*/}
                <div className="main-menu__slide">
                    <ul>
                        <Accordion>
                            <li><Link href={'/'}>Home</Link></li>
                            {/*<li className={location.pathname === '/about' ? 'active' : ''}></li>*/}
                            <Accordion.Item
                                eventKey="0">
                                <Accordion.Header><span>About Us</span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><Link href={'/about#our-story'}>Our Story</Link></li>
                                        <li><Link href={'/about#vision'}>Vision</Link></li>
                                        <li><Link href={'/about#mission'}>Mission</Link></li>
                                        <li><Link href={'/about#values'}>Values</Link></li>
                                        <li><Link href={'/about#chairman-message'}>Message from Chairman</Link></li>
                                        <li><Link href={'/about#message-from-managing-director'}>Message from MD</Link>
                                        </li>
                                        <li><Link href={'/about#board-of-directors'}>Board of Directors</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item
                                eventKey="1">
                                <Accordion.Header><span>Projects</span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><Link href={'/projects?status=ready'}>Ready</Link></li>
                                        <li><Link href={'/prhrefects?status=ongoing'}>Ongoing</Link></li>
                                        <li><Link href={'/projects?status=upcoming'}>Upcoming</Link></li>
                                        <li><Link href={'/projects?status=completed'}>Completed</Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <li><Link
                                href={'/landowners'}>Landowners</Link></li>
                            <li><Link href={'/news'}>News &
                                Events</Link></li>
                            <li><a
                                href={'https://blog.tropicalhomesltd.com/'}>Blog</a></li>
                            <li><Link
                                href={'/career'}>Career</Link></li>
                            <li><Link
                                href={'/contact'}>Contact</Link></li>
                        </Accordion>

                    </ul>
                </div>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    height: 80px;
    padding-top: 25px;
    display: flex;
    align-items: center;
    transition: .6s ease;

    &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        background-image: url('/images/static/mission-bg.png');
        opacity: 0;
        transition: .6s ease;
    }

    &:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.23);
        opacity: 0;
        transition: .6s ease;
    }

    .main-menu__logo {
        a {
            display: flex;
            height: 100%;
            align-items: center;
        }
    }

    .container {
        height: 100%;
    }

    .row {
        position: relative;
        z-index: 5;
        height: 100%;
    }

    img {
        transition: .5s ease;
        height: 70px;
    }

    ul.main-menu__top {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: flex-end;


        li {
            position: relative;
            height: 100%;


            span {
                cursor: pointer;
            }

            a {
                font-size: 14px;
                line-height: 20px;
                color: #ffffff;
                white-space: nowrap;
                height: 100%;
                display: flex;
                align-items: center;
            }

            &:not(:nth-last-of-type(1)) {
                margin-right: 30px;
            }

            &.active > a {
                color: ${hover};
                pointer-events: none;
            }

            //sub menu

            ul {
                position: absolute;
                width: 250px;
                background-color: #FFF;
                padding: 30px 20px 15px 20px;
                top: 55px;
                opacity: 0;
                visibility: hidden;
                transition: .5s ease;
                box-shadow: 0 0 20px rgba(221, 221, 221, 0.29);

                li {


                    a {
                        color: rgb(29, 49, 48);
                        width: 100%;
                    }

                    margin-bottom: 15px;
                    //&:not(:nth-last-of-type(1)) {
                    //  margin-bottom: 10px;
                    //}
                }
            }

            &.hamburger {
                height: 48px;
                width: 48px;
                border-radius: 50%;
                border: 1px solid #FFF;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                display: none;

                img {
                    height: 15px;

                    &:nth-last-of-type(1) {
                        display: none;
                    }
                }
            }

            &:hover {
                ul {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }


    .main-menu__slide {
        position: fixed;
        height: calc(100vh - 80px);
        top: 80px;
        width: 100%;
        bottom: 0;
        right: 0;
        background-color: #1D3130;
        padding-top: 60px;
        overflow: auto;
        padding-bottom: 50px;
        display: none;
        transform: translateX(100%);
        opacity: 0;
        z-index: 999;

        li {
            a {
                color: #ffffff;
                font-size: 18px;
                line-height: 27px;
                width: 100%;
                display: flex;
                justify-content: center;
            }

            &:not(:nth-last-of-type(1)) {
                margin-bottom: 40px;
            }

            &.active {
                a {
                    color: ${hover};
                }

                ul li a {
                    color: #FFF;
                }
            }
        }
    }


    .accordion-item {
        width: 100%;
        margin-bottom: 40px;

        h2 {
            line-height: unset;
        }

        .accordion-button {
            background-color: transparent;
            width: 100%;
            text-align: center;
            border: none;
            outline: none;
            box-shadow: none;
            font-size: 18px;
            line-height: 27px;
            color: #ffffff;
        }

        .accordion-body {
            padding-top: 30px;
            //padding-bottom: 30px;

            ul {
                li {
                    &:not(:nth-last-of-type(1)) {
                        margin-bottom: 20px;
                    }
                }
            }
        }

        &.active {
            button {
                color: ${hover};
            }
        }
    }


    @media (max-width: 991px) {
        height: 80px;
        padding-top: 0px;
        img:not(ul img) {
            height: 60px;
        }

        ul.main-menu__top li {
            &:not(:nth-last-of-type(1)) {
                display: none;
            }

            &:nth-last-of-type(1) {
                display: flex;
            }
        }
    }

`;

export default MyComponent;
