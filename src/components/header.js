import React from 'react';
import { connect } from 'react-redux'
import Clock from './clock'
import '../styles/header.css'


function Header (props) {
    return (
        <header>
            <div className = "container">
                <div className = "header-menu">
                    <div>
                        <p className = "header-logo"><span>chart</span>Exchange</p>
                    </div>
                    <div className = "header-data">
                    <p>{props.loaded ? <span className = "data-ok">data is loaded</span> 
                        : <span className = "data-false">no data</span> }</p>
                        <Clock />
                    </div>
                </div> 
            </div> 
        </header>
    )
}

const mapStateToProps = (state) => ({
    loaded: state.arrayOfCurrencies.loaded
})

export default connect(mapStateToProps)(Header);
