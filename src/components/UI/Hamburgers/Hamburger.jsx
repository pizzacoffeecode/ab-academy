import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const HamburgerSpin = (props) => {
    return (
        <Hamburger toggled={ props.toggled } toggle={ props.toggle } active={ props.active } />
    )
}

export default HamburgerSpin