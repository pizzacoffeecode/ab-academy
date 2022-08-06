//? React Components
import { React, useState, useEffect } from 'react';
//? NextJS Components
import Link from 'next/link';
import { useRouter } from 'next/router'
//? My Components
import { navLinks } from '../../../public/utils/data'
import HamburgerSpin from '../UI/Hamburgers/Hamburger';
// import mediaQueries from '../../../public/utils/data';
//? My Hooks
import { viewportContext } from '../Resize/Resize';
//? Libraries
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
//? Styles
import styles from './NavBar.module.scss'
//?Images
import Image from 'next/image';
import Logo from '../../../public/assets/images/soccer_ball.svg'
import LogoGold from '../../../public/assets/images/logo_final_gold.svg'

//? GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function NavBar(mediaQueries) {
    // const { width } = useContext(viewportContext);
    // const { mobile, ipad, laptop, desktop } = mediaQueries;

    const router = useRouter();


    const [ isOpen, setOpen ] = useState(false)

    useEffect(() => {
        const targetElement = document.querySelector('#nav_container');
        // Prevent scrolling on mount
        !isOpen ? enableBodyScroll(targetElement) : disableBodyScroll(targetElement);
        // isOpen ? lockScroll() : unlockScroll();
        return () => { clearAllBodyScrollLocks }
    }, [ isOpen ]);
    function RemoveMobileNav() {
        setOpen(false);
    }
    const navItems = navLinks.map((navitem, idx) =>
        <div
            key={ idx }
            className={ styles.glitch }
            data-text={ navLinks[ idx ].name }>
            <Link href={ { pathname: navitem.path } } passHref>
                <a className={ router.pathname == navitem.path ? "active" : "" } onClick={ RemoveMobileNav }>{ navitem.name }</a>
            </Link>
        </ div >
    );

    return (
        <div className={ styles.navbar__container } id="nav_container">
            {
                // width < desktop &&
                isOpen && <div className={ styles.navbar__menu }>
                    <div className={ styles.navbar__links_container__mobile }>
                        <div className={ styles.navbar__links__mobile }>
                            { navItems }
                        </div>
                    </div>

                </div>

            }
            <div className={ styles.navbar__logo }>
                <Link href="/" passHref>
                    {/* //! Left Logo */ }
                    <Image
                        className={ styles.navbar__logo_image }
                        src={ LogoGold }
                        // src='/assets/images/logo_only.webp'
                        alt="AB Logo"
                        priority={ true }
                        layout='fixed'
                        height={ 75 }
                        width={ 75 }
                        placeholder={ 'empty' }
                    />
                    {/* <img
                    src="/assets/images/lion_light_inverse.svg"
                    alt="AB Logo"
                /> */}
                </Link>
            </div>
            <div className={ styles.navbar__slogan }>
                <p className={ styles.navbar__slogan_ab }>A.B.</p>
                <p className={ styles.navbar__slogan_s }>S</p>
                <Image
                    className={ styles.navbar__slogan_logo }
                    src={ Logo }
                    alt="AB Logo"
                    priority={ true }
                    layout='fixed'
                    height={ 50 }
                    width={ 50 }
                    placeholder={ 'empty' }
                />
                <p className={ styles.navbar__slogan_academy }>CCER</p>
                {/* &nbsp;ACADEMY */ }
            </div>

            {/* {
                width > desktop &&
                <div className={ styles.navbar__links_container }>
                    {
                        width > desktop &&
                        <div className={ styles.navbar__links }>
                            { navItems }
                        </div>
                    }
                </div>
            } */}
            <div className={ styles.navbar__space } />
            <div className={ styles.navbar__social }>
                <Link href="https://www.instagram.com/a.b.soccertraining/" passHref>
                    <Image
                        className={ styles.navbar__ig_img }
                        src="/assets/icons/fb2.png"
                        alt="Facebook Logo"
                        priority={ true }
                        layout='fixed'
                        height={ 48 }
                        width={ 48 }
                        placeholder={ 'empty' }
                    />
                </Link>
                <Link href="https://www.facebook.com/AB-Soccer-Training-109075081573859" passHref>
                    <Image
                        className={ styles.navbar__fb_img }
                        src="/assets/icons/instagram.svg"
                        alt="Instagram Logo"
                        priority={ true }
                        layout='fixed'
                        height={ 48 }
                        width={ 48 }
                        placeholder={ 'empty' }
                    />
                </Link>
                <Image
                    className={ styles.navbar__yt_img }
                    src="/assets/icons/yt6.png"
                    alt="You Tube Logo"
                    priority={ true }
                    layout='fixed'
                    height={ 48 }
                    width={ 48 }
                    placeholder={ 'empty' }
                />

            </div>
            {/* width < desktop && */ }
            <div className={ styles.navbar__hamburger }>
                <HamburgerSpin toggled={ isOpen } toggle={ setOpen } />
            </div>
        </div >
    )
};
export default NavBar;

// Hook