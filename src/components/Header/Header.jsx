import React from "react";
import NavBar from '../Navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={ styles.container }>
            <NavBar />
        </div>
    );
}

export default Header;