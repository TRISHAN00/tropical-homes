export const PageAnimation = {
    init: {
        height: "100%",
        top: 0,
        bottom: 'auto',
        transition: {
            duration: 1.2,
            ease: 'easeInOut'
        },
    },
    anim: {
        height: "0%",
        bottom: 0,
        top: 'auto',
        transition: {
            duration: 2.5,
            ease: 'easeInOut',
            // delayChildren: 0.3,
            staggerChildren: .06
        },
    },
    exit: {
        height: "100%",
        top: 0,
        bottom: 'auto',
        transition: {
            duration: .8,
            // delayChildren: 0.3,
            staggerChildren: .06
        },
    }
};