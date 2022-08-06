import React from 'react';
// import { openPopupWidget } from "react-calendly";
import styles from './ButtonBlack.module.css'

const ButtonBlack = (props) => {
    return (
        <div className={ props.cname } >
            {/* <Link href="/calendly"> */ }
            {/* <button className={ styles.btn } type="button" onClick={ () => openPopupWidget({ url: 'https://calendly.com/air-interactive' }) }>{ props.children }</button> */ }
            <button className={ styles.btn } type="button" onClick={ props.clickProp }>{ props.children }</button>
            {/* </Link> */ }
            <style global jsx>{ `
                .calendly-overlay .calendly-popup{
                margin-top: 5vh;
                }
        `}</style>
        </div >
    )
};

export default ButtonBlack;
