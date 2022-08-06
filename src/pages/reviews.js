import React from 'react';
import Review from '../components/Reviews/Review';

import styles from '../styles/Reviews.module.css'

const reviews = () => {
    return (
        <>
            <div className={ styles.reviews__container }>
                <div className={ styles.review__spacer } />
                <div className={ styles.review__title }>
                    <h1>Reviews</h1>
                </div>
                <Review propsClassName={ styles.reviews } />

            </div >
            <div className={ styles.review__footer } />
        </>
    )
};

export default reviews;
