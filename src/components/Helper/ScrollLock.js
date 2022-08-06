import React from 'react';

function isiOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
export const useScrollLock = () => {

    const scrollOffset = 0;
    const lockScroll = React.useCallback(() => {
        const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${ scrollBarCompensation }px`;


        if (isiOS) {
            scrollOffset = window.pageYOffset;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${ scrollOffset }px`;
            document.body.style.width = '100%';
        }
    }, [])

    const unlockScroll = React.useCallback(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        if (isiOS) {
            document.body.style.position = '';
            document.body.style.top = ``;
            document.body.style.width = '';
            window.scrollTo(0, scrollOffset);
        }
        delete document.body.dataset.scrollLock;
    }, []);

    return {
        lockScroll,
        unlockScroll
    };
}