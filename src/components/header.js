import React from 'react';
import Clock from './clock'
import '../styles/header.css'

function Header () {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <p className = "header-logo"><span>chart</span>Exchange</p>
                    </div>
                    <div className = "header-data">
                        <Clock />
                    </div>
                </div> 
            </div> 
        </header>
    )
}

export default Header;
