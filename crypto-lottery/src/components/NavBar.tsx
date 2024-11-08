import React from 'react'
import Logo from '../assets/aave-com-logo-header.svg'

const NavBar = ()=>{

    return(
        <div>
            <img src={Logo}></img>
            <button class="taskbar-button">Dashboard</button>
            <button class="taskbar-button">Markets</button>
            <button class="taskbar-button">Stake</button>
            <button class="taskbar-button">Governance</button>
            <button class="taskbar-button">More⋯</button>

        </div>
    )
}

export default NavBar