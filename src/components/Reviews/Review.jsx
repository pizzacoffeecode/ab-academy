import React from 'react'
import styles from './Review.module.css'
import { reviewData } from '../../../public/utils/data';

const Review = (props) => {

    const reviews = reviewData.map((review, idx) =>
        <div key={ idx } className={ styles.review }>
            <figure>
                <blockquote>
                    <p>{ review.qoute }</p>
                </blockquote>
                <figcaption> <cite>- { review.author }</cite></figcaption>
                <time> { review.date }</time>

                <hr />
            </figure>
        </div >
    );

    return (
        <div className={ props.propsClassName }>{ reviews }</div>
    )
}

export default Review