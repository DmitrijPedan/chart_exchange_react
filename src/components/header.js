import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock'
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <p className = "header-logo">
                            <span><FontAwesomeIcon icon= {faChartPie}/> NBU </span>Exchange rates
                        </p>
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
