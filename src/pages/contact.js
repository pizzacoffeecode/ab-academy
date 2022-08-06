import React from "react";
import styles from '../styles/Contact.module.css'
import ContactSection from "../sections/ContactSection/ContactSection";

export default function Contact() {
    return (
        <>
            <div className={ styles.contact__container }>
                <div className={ styles.contact__title }>
                    <h1>Contact</h1>
                </div>
                <div className={ styles.contact__form }>
                    <ContactSection />
                </div>
            </div>
        </>
    )
}