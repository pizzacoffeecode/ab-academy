import React, { useLayoutEffect, useEffect, useState } from 'react';
import CustomLoading from './../../components/UI/Loading/CustomLoading';

//? 3rd
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

//? Images
import Image from 'next/image';
import bgimage from '../../../public/assets/images/soccer_bg_01.webp';

//? styles
import styles from './VideoSection.module.css'

const VideoSection = (props) => {
    const { video } = props;

    const [ loaded, setLoaded ] = useState(false);
    const [ media, setMedia ] = useState(false);
    const [ locked, isLocked ] = useState(true);
    const [ tries, setTries ] = useState(3);

    useEffect(() => {
        const targetElement = document.querySelector('#vid__container');
        // Prevent scrolling on mount
        locked ? disableBodyScroll(targetElement) : enableBodyScroll(targetElement);
        // locked ? lockScroll() : unlockScroll();
        return () => { clearAllBodyScrollLocks }
    }, [ locked ]); // run once



    function handleLoad() {
        useEffect(() => {
            setLoaded(true);
            removeEventListener("canPlayThrough", handleLoad)
        }, [])
    }

    useEffect(() => {
        setMedia(document.getElementById('bgvideo'));

        if (loaded && media.readyState > 3) {
            media.pause();
            if (window.jQuery) {
                $("#custom").fadeOut("slow");
                isLocked(false);
                media.play();
                return;
            }
        }
        loadImage();
    }, [ loaded ]);

    function loadImage() {
        console.log(tries);

        if (tries > 0) {
            setTimeout(() => {

                if (window.jQuery) {
                    $("#custom").fadeOut("slow");
                    document.getElementById('bgvideo').play();
                    isLocked(false);
                    document.getElementById('posterimg').style.display = "none";
                    return;
                }
                setTries(tries--);
                loadImage();
            }, 3000);
        } else {
            isLocked(false);
            document.getElementById('bgvideo').style.display = "none";
            document.getElementById('custom').style.display = "none";
        }
    }


    return (
        <div className={ styles.video__container } id='vid__container'>

            <div className={ styles.video__bg }>
                <div className={ styles.video__overlay } />

                <div id='custom' >
                    < CustomLoading />
                </div>

                <Image
                    //   loader={myLoader}
                    id='posterimg'
                    src={ bgimage }
                    alt="cover__video__still"
                    layout='fill'
                    objectfit='cover'
                    // placeholder={ 'empty' }
                    loading='eager'
                />
                < video
                    className={ styles.video }
                    // poster={ bgimage }
                    onCanPlayThrough={ handleLoad() }
                    playsInline
                    id='bgvideo'
                    // autoPlay
                    loop
                    muted
                // preload="auto"
                // src={ video }
                >
                    <source type='video/mp4' src={ video } />
                    <p>Your browser does not support HTML5 video.</p>
                </video>

            </div>
        </div >
    )

}
export default VideoSection


{/* <Image
//   loader={myLoader}
src={ bgimage }
alt="cover__video__still"
layout='fill'
objectfit='cover'
placeholder={ 'empty' }
/> */}