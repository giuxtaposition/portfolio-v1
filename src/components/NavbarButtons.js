import React from 'react'
import { navbarButtons } from '../constants'
import NavbarButton from './NavbarButton'

function NavbarButtons() {

    return (
        <ul className="NavbarButtons">
            {
                navbarButtons.map(button =>
                    <NavbarButton
                        name={button.name}
                        key={button.name}
                        linkPath={button.link} />
                )
            }
        </ul>
    )
}

export default NavbarButtons;