import React from 'react'
import styles from '../styles/Gallery.module.css'
import VideoSection from '../sections/VideoSection/VideoSection'
import PhotoGallery from '../components/UI/PhotoGallery/PhotoGallery';



const gallery = () => {
    return (
        <div className={ styles.gallery__Container }>

            {/* <div className={ styles.video__section }>
                <VideoSection video='/assets/video/ABSepia.mp4' />
            </div> */}

            <div className={ styles.gallery__head } />

            <div className={ styles.gallery__slider } >
                <PhotoGallery />
            </div>
        </div >
    )
}

export default gallery