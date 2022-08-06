import React, { useState, useEffect, useLayoutEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';

import styles from './PhotoGallery.module.css'
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Image from 'next/image';


const PhotoGallery = () => {

    const [ muted, setMuted ] = useState(0);
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    function handleTransitionStart(args) {
        // console.log(args);
        var currentVid = args + 1;

        var video = document.getElementById(`video${ currentVid }`);
        console.log(video);
        // console.log(video.props);
        // console.log(muted)
        video.pause();
        video.currentTime = 0;


    };

    function handleTransitionEnd(args) {
        var nextVid = args + 1;
        console.log(nextVid);

        var nextVideo = document.getElementById(`video${ nextVid }`);
        nextVideo.play();
    }

    return (
        <>
            {/* {
                playVideo &&
                <button onClick={ handleClick }>
                    <div className={ styles.video_player }>
                        <video
                            className={ styles.video__current }
                            id='bgvideo'
                            autoPlay
                            loop
                            muted
                        >
                            <source src='/assets/video/gallery/gal_01.mp4' type='video/mp4' />
                        </video>
                    </div>
                </button>
            } */}
            <AwesomeSlider
                // play={ true }
                // mobileTouch={ true }
                fillParent={ true }
                playsInsline
                // interval={ 1000 }
                bullets={ false }
            // controls={ false }
            // play={ true }
            // cancelOnInteraction={ false } // should stop playing on user interaction
            // interval={ 6000 }

            >
                <div>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video1'
                        controls
                        playsInline
                        loop
                        // autoPlay
                        // muted
                        src='/assets/video/gallery/gal_01.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                <div>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video3'
                        controls
                        playsInline
                        loop
                        // autoPlay
                        // muted={ false }
                        src='/assets/video/gallery/gal_03.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                <div>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video2'
                        controls
                        playsInline
                        loop
                        // autoPlay
                        // muted
                        src='/assets/video/gallery/gal_02.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                <div>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video4'
                        controls
                        playsInline
                        loop
                        // autoPlay
                        // muted
                        src='/assets/video/gallery/gal_04.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                {/* <div data-src="/assets/video/gallery/gal_01.mp4" />
                <div data-src="/assets/video/gallery/gal_02.mp4" />
                <div data-src="/assets/video/gallery/gal_03.mp4" />
                <div data-src="/assets/video/gallery/gal_04.mp4" /> */}
                {/* <div className={ styles.video__container }> */ }

                {/* <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video1'
                        // controls
                        playsInline
                        loop
                        // autoPlay
                        muted
                        src='/assets/video/gallery/gal_01.mp4' type='video/mp4'
                    >
                    </video> */}
                {/* </div> */ }
                {/* <div className={ styles.video__container }>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video2'
                        // controls
                        playsInline
                        loop
                        // autoPlay
                        src='/assets/video/gallery/gal_03.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                <div className={ styles.video__container }>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video3'
                        // controls
                        playsInline
                        loop
                        // autoPlay
                        src='/assets/video/gallery/gal_02.mp4' type='video/mp4'
                    >
                    </video>
                </div>
                <div className={ styles.video__container }>
                    <video
                        className={ `${ styles.video } ${ "video" }` }
                        id='video4'
                        // controls
                        playsInline
                        loop
                        // autoPlay
                        src='/assets/video/gallery/gal_04.mp4' type='video/mp4'
                    >
                    </video>
                </div> */}

            </AwesomeSlider >

        </>
    )
}

export default PhotoGallery





