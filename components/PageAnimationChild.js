export const PageAnimationChild = {
    init: {
        opacity: 0,
        width: '42px',
        transition: {
            duration: .2,
            // ease: 'easeInOut'
        },
    },
    anim: {
        opacity: 1,
        width: '100px',
        // delay: .3,
        transition: {
            duration: .5,
            ease: 'easeInOut'
        },
    },
    exit: {
        opacity: 0,
        width: '42px',
        transition: {
            duration: .1,
            // ease: 'easeInOut'
        },
    }
};