import React from 'react'
import Logo from '../assets/aave-com-logo-header.svg'

const NavBar = ()=>{

    return(
        <div>
            <img src={Logo}></img>
            <li>Dashboard</li>
            <li>Markets</li>
            <li>Stake</li>
            <li>Governance</li>
            <li>More⋯</li>
            <li>Bridge GHO</li>
            <li>Switch Tokens</li>
            <li>Connect wallet</li>
        </div>
    )
}

export default NavBar