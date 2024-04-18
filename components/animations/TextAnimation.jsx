import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect } from "react";
import {useRouter} from "next/router";

export const SplitUp = () => {
    const location = useRouter();
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        ScrollTrigger.refresh();

        gsap.utils.toArray('.split-up').forEach((item, i) => {
            const parentSplit = new SplitText(item, {
                wordsClass: "split-parent",
                type: "words",
                reduceWhiteSpace: false
            });
            const childSplit = new SplitText(item, {
                type: "words",
                wordsClass: "split-child",
                reduceWhiteSpace: false
            });

            const tl = gsap.timeline();

            childSplit.words.forEach(i => {
                i.parentNode.style.height = i.clientHeight + 'px';
                i.parentNode.style.overflow = 'hidden';
            });

            gsap.from(childSplit.words, {
                duration: 1,
                yPercent: 150,
                alpha: 1,
                scrollTrigger: {
                    trigger: item,
                    toggleActions: "restart none none reset",
                    end: `+ ${item.clientHeight}`
                }
            });
        });

    }, [location.pathname]);

    return null; // This component doesn't render anything, so return null
};

export default SplitUp; // Export the component as default
