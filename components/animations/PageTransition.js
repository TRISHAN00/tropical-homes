import {gsap, TimelineLite} from "gsap";
import {useLocation} from "react-router-dom";
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DrawSVGPlugin} from "gsap/dist/DrawSVGPlugin";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "../../api/redux/global";

const PageTransition = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin);
    const location = useLocation();
    let MainStore = useSelector(state => state)
    const dispatch = useDispatch()

    // preloader start on page/router change
    useEffect(() => {
        const tl = new TimelineLite()
        dispatch(loading())
        tl.to('.page-transition', {
            opacity: 1,
            duration: 1,
            // ease: 'Cubic.easeOut',
            display: 'flex'
        }).to('.page-transition .logo', {
            duration: .3,
            opacity: 1
        }, '-=.7')
    }, [location.pathname])

    // preloader end after page load
    useEffect(() => {
        const tl = new TimelineLite()
        if (!MainStore.globalReducer.globalLoader) {
            tl.to('.page-transition', {
                delay: 1,
                opacity: 0,
                duration: 1,
                display: 'none'
            }).to('.page-transition .logo', {
                duration: .6,
                opacity: 0
            }, '-=.6')
        }
    }, [MainStore])

};

export default PageTransition;
