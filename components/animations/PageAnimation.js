export const PageAnimation = {
    init: {
        // height: "100%",
        // top: 0,
        // bottom: 'auto',
        opacity: 1,
        zIndex: 99999,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        },
    },
    anim: {
        // height: "0%",
        // bottom: 0,
        // top: 'auto',
        opacity: 0,
        zIndex: -1,
        transition: {
            duration: 1.5,
            ease: 'easeInOut',
            zIndex: {
                delay: 1.5
            }
        },
    },
    exit: {
        opacity: 1,
        zIndex: 99999,
        transition: {
            duration: .8,
            // delayChildren: 0.3,
            // staggerChildren: .06
        },
    }
};