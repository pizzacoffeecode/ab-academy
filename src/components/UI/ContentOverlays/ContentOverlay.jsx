import React from 'react'
import Dropdown from '../Dropdowns/Dropdown'
import ContactForm from '../ContactForms/ContactForm';
import Button from '../Buttons/Button';

import styles from './ContentOverlay.module.css'

const ContentOverlay = (props) => {
    const { content } = props;
    return (
        <div className={ styles.banner__container }>
            {
                content &&
                <div className={ styles.banner__content }>
                    <div className={ styles.banner__grid }>
                        <ContactForm cname={ styles.banner__contact } />
                        {/* <div className={ styles.banner__quote1 }>
                            <p>&quot;With Coach&apos;s guidance my daughter not only learned soccer skills,
                                but listening, taking turns and socializing with other children.&quot;</p>
                        </div>
                        <div className={ styles.banner__quote2 }>
                            <p>&quot;Coach Brown is a dedicated and talented coach who truly cares about his athletes.&quot;</p>
                        </div>
                        <div className={ styles.banner__quote3 }>
                            <p>&quot;Coach is very attentive and great at keeping the kids attention through an entertaining positive learning environment.&quot;</p>
                        </div> */}
                    </div>
                </div>
            }
        </div >
    )
}

export default ContentOverlay