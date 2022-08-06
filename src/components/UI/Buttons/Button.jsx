import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={ props.cname } >
            {/* <Link href="/plans"> */ }
            <button className={ styles.btn } type="submit" value="submit" onClick={ props.clickProp }>{ props.children }</button>
            {/* <button className={ styles.btn } type="button" onClick={ () => HandleClick() }>{ props.children }</button> */ }
            {/* </Link> */ }
        </div >
    )
};

export default Button;
