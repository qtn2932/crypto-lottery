import React from 'react'
import Logo from '../assets/aave-com-logo-header.svg'

const NavBar = ()=>{

    return(
        <header>
            <img src={Logo}></img>
            <a>Dashboard</a>
            <a>Markets</a>
            <a>Stake</a>
            <a>Governance</a>
            <a>More⋯</a>
            <a>Bridge GHO</a>
            <a>Switch Tokens</a>
            <a>Connect wallet</a>
        </header>
    )
}

export default NavBar