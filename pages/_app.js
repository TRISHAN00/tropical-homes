import {wrapper} from "./api/store";
import Menu from "../components/Menu";
import GlobalStyle from "../styles/globalStyle";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {AnimatePresence} from "framer-motion";
import Router, {useRouter} from 'next/router'
import '/styles/fonts.css';
import "lightgallery.js/dist/css/lightgallery.css";
import 'swiper/css';
import {useEffect, useRef, useState} from "react";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";
import Head from 'next/head';
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {ScrollSmoother} from 'gsap/dist/ScrollSmoother';
import FloatingIcon from "../components/FloatingIcon";
import TopArrow from "../components/TopArrow";
import {SplitUp} from "../components/animations/TextAnimation";
import {Loading} from "../components/Loading";
import {useSelector} from "react-redux";
import PageTransition from "../components/PageTransition";
import Script from "next/script";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}
function MyApp({Component, pageProps, settingsData}) {
    const [showFooterForm, setShowFooterForm] = useState(true);
    const [offset, setOffset] = useState('90');
    const main = useRef();
    const el = useRef();
    const router = useRouter();

    const store = useSelector((s) => s);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Place your hook-based code here
            let smoother = ScrollSmoother.create({
                smooth: 2,
            });
            ScrollTrigger.refresh();

            if (location.hash) {
                setTimeout(() => {
                    smoother.scrollTo(location.hash, 3)
                }, 500)
            }


            // Scroll to top on route change
            const handleRouteChange = (url) => {
                if (url !== '/about') {
                    window.scrollTo(0, 0);
                }
            };

            Router.events.on('routeChangeComplete', handleRouteChange);

            return () => {
                Router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [Router, router]);

    useEffect(() => {
        const {pathname} = router;
        if (pathname.startsWith("/project/") || pathname === "/landowners" || pathname === "/career" || pathname.startsWith("/blog/") || pathname === "/contact" || pathname === "/customers") {
            setShowFooterForm(false);
        } else {
            setShowFooterForm(true);
        }
    }, [router.pathname]);


    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        updateOffset();
    }, []);

    // route change scroll top & page class
    useEffect(() => {
        if (location.pathname === "/") {
            document.body.classList.add("in-home-page");
        } else {
            document.body.classList.remove("in-home-page");
        }

        window.scroll(0, 0);

        const footerForm = document.querySelector(".footer-form");
        if (footerForm) {
            if (location.pathname.startsWith("/projects")) {
                footerForm.classList.add("bg-height");
            } else {
                footerForm.classList.remove("bg-height");
            }
        }

        if (location.pathname.startsWith("/blog/") || location.pathname.startsWith("/news/")) {
            document.body.classList.add("on-blog");
        } else {
            document.body.classList.remove("on-blog");
        }
    }, [router.pathname]);

    wrapper.getInitialAppProps((store) => async ({Component, ctx}) => {
        // Wait for all page actions to dispatch
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
        };

        // 2.1 Stop if on server
        if ((ctx.req) && Component.getInitialProps) {
            // store.dispatch(END)
            // used in hydration reducer
            store.dispatch({type: SET_IS_SERVER})
        }

        // getServerSideProps is used
        const isServer = !ctx.req?.url?.startsWith("/_next");
        if (isServer && !Component.getInitialProps) {
            // used in hydration reducer
            store.dispatch({type: SET_IS_SERVER});
        }

        // 3. Return props
        return {
            pageProps,
        };
    });

    SplitUp()


    return (<>
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3nEqKsliw_EQSpaxAq6R8hOUwpGyxJ9s&libraries=places"/>


            <Script>
                {`var chatbox = document.getElementById('fb-customer-chat');
                    chatbox.setAttribute("page_id", "1028624343830718");
                    chatbox.setAttribute("attribution", "biz_inbox");`}
            </Script>

            <Script>
                {`// facebook messenger
                    window.fbAsyncInit = function () {
                        FB.init({
                            xfbml: true,
                            version: 'v18.0'
                        });
                    };
                
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));`}
            </Script>

            <Script>
                {`  window.dataLayer = window.dataLayer || [];

                    function gtag() {
                        dataLayer.push(arguments);
                    }
                
                    gtag('js', new Date());
                
                    gtag('config', 'G-ZQ0NFGY8RT');`}
            </Script>

            <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZQ0NFGY8RT"  strategy="afterInteractive"/>

            <Script>
                {`!function (f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function () {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2436992946508604');
                fbq('track', 'PageView');`}
            </Script>


            <ToastContainer position="top-right" autoClose={4000} closeOnClick hideProgressBar={true}/>
            <DefaultSeo {...SEO}/>
            <GlobalStyle/>
            {store.contactReducer?.loading && <Loading/>}
            <PageTransition/>
            {router.pathname === "/" && <FloatingIcon/>}
            <div id="fb-root"/>
            <div id="fb-customer-chat" className="fb-customerchat"/>
            <Menu/>
            <div id="smooth-wrapper" ref={main} ref={el}>
                <div id="smooth-content">

                    <TopArrow offset={offset}/>
                    <AnimatePresence exitBeforeEnter>
                        <Component key={router?.pathname} {...pageProps} />
                    </AnimatePresence>

                    {showFooterForm && <FooterForm/>}
                    <Footer data={settingsData?.data}/>
                </div>
            </div>
        </>

        // </Provider>
    )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    let settingsData = null;

    try {
        // Fetch settings data from the API
        const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/settings-data');
        settingsData = await res.json();
    } catch (error) {
        console.error("Error fetching settings data:", error);
    }

    // Fetch initial props if available
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Pass settingsData as a prop to the app
    return {pageProps, settingsData};
}


export default wrapper.withRedux(MyApp)
