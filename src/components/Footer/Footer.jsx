import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={ styles.footer__container }>
            <div className={ styles.footer__content }>
                <p className={ styles.footer__title }>A.B. Soccer Training</p>

                <p className={ styles.footer__email }>alaincbrown@gmail.com</p>

                <p className={ styles.footer__number }>856-383-9385</p>

                Philadelphia,

                <p className={ styles.footer__city }>PA</p>

                <div className={ styles.footer__social }>
                    <Image className={ styles.navbar__ig_img }
                        src="/assets/icons/fb2.png"
                        priority={ true }
                        alt="AB Logo"
                        layout='fixed'
                        width={ 48 }
                        height={ 48 }

                    />


                    <Image
                        className={ styles.navbar__fb_img }
                        src="/assets/icons/instagram.svg"
                        alt="AB Logo"
                        layout='fixed'
                        width={ 48 }
                        height={ 48 }

                    />


                    <Image
                        className={ styles.navbar__li_img }
                        src="/assets/icons/li.png"
                        alt="AB Logo"
                        layout='fixed'
                        width={ 48 }
                        height={ 48 }
                    />
                </div>
                <p className={ styles.footer__copyright }>©2022</p>
            </div>
        </div>
    )
}

export default Footer