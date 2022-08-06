import React from 'react';
import ContactForm from '../../components/UI/ContactForms/ContactForm';
import styles from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <div className={ styles.contact__container }>
            <div className={ styles.contact__form }>
                < ContactForm cname={ styles.contact } />
            </div>
        </div>
    )
};

export default ContactSection;
