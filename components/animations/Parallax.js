import {useEffect, useLayoutEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

export const Parallax = () => {
    const location = useRouter();
    gsap.registerPlugin(ScrollTrigger);
    let getPost = useSelector(state => state)

    useEffect(() => {
        if (window?.innerWidth > 768) {
            let movementFactor = 0.8; // controls how much the backgrounds move. It's a percentage of the section's height. This can be negative if you want to move in the other direction.
            let backgrounds = gsap.utils.toArray(".parallax-image img");
            ScrollTrigger.refresh();
            if (backgrounds?.length > 0) {
                backgrounds.forEach((img, i) => {

                    // img.addEventListener("load", () => { // wait until the image loads because we need to ascertain the naturalWidth/naturalHeight

                    // fitImage(img, movementFactor);

                    // the first image (i === 0) should be handled differently because it should start at the very top.
                    // use function-based values in order to keep things responsive
                    gsap.fromTo(img, {
                        y: () => i ? -movementFactor * 0.5 * img.parentNode?.offsetHeight : 0
                    }, {
                        y: () => movementFactor * 0.5 * img.parentNode?.offsetHeight,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img.parentNode,
                            start: () => i ? "top bottom" : "-1px top",
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true // to make it responsive
                        }
                    });
                    // })

                    // Give the backgrounds some random images
                    // img.setAttribute("src", `https://picsum.photos/1600/800?random=${i}`);

                });

// whenever the window resizes, we should adjust the backgrounds to fit properly.
//                 window.addEventListener("resize", () => backgrounds.forEach(img => fitImage(img, movementFactor)));

// fits the image into the parent proportionally while ensuring there's enough of a margin for the vertical movement.
                function fitImage(img, marginFactor) {
                    let sx = img.offsetWidth / img.naturalWidth,
                        sy = img?.offsetHeight * (1 + Math.abs(marginFactor)) / img.naturalHeight,
                        scale = Math.max(sx, sy),
                        w = Math.ceil(img.naturalWidth * scale),
                        h = Math.ceil(img.naturalHeight * scale);
                    gsap.set(img, {
                        width: w,
                        height: h,
                        top: Math.ceil((img.offsetHeight - h) / 2),
                        left: Math.ceil((img.offsetWidth - w) / 2),
                        position: "absolute"
                    });
                }
            }

        }


    }, [location.pathname, getPost])
}


// how to use
// 1. Add 'parallax' class on the section. Add 'data-parallax={speed string/number: more than 2 and less than 10}' for parallax speed (if needed)
// 2. Add 'parallax' props on Img component.


export const ParallaxImg = () => {
    const location = useLocation();
    let getPost = useSelector(state => state)

    useEffect(() => {
        gsap.utils.toArray(".parallax-img").forEach((item, i) => {


            let getImg = item.querySelector('.global-image img')
            let parallaxSpeed = item.getAttribute('data-parallax');

            gsap.to(getImg, {
                yPercent: parallaxSpeed ? parallaxSpeed : 15,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    scrub: true
                }
            });
        });
    }, [location.pathname, getPost])

}

// parallax item
export const ParallaxItem = () => {
    const location = useLocation();
    let getPost = useSelector(state => state)

    useEffect(() => {
        gsap.utils.toArray(".parallax-item").forEach((item, i) => {
            let parallaxSpeed = item.getAttribute('data-speed');
            gsap.to(item, {
                y: parallaxSpeed ? parallaxSpeed : 50,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    // markers: true,
                    scrub: true
                }
            });
        });
    }, [location.pathname, getPost])


}