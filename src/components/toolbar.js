import React from 'react';
import {switchDisplay} from '../services/switchDisplay';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine, faTable, faChartArea} from '@fortawesome/free-solid-svg-icons';
import '../styles/toolbar.css';

const Toolbar = () => {

    const onClickHandler = (targ) => {
        const id = Boolean(targ.id) ? targ.id : targ.parentNode.id
        switchDisplay(id); 
    }

    return (
        <div className = "toolbar">
            <button id = "chartElement" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon= {faChartLine}/> 
                <p>chart</p>
            </button>
            <button id = "tableElement" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon={faTable} />
                <p>table</p>
            </button>
            <button id = "stockElement" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon={faChartArea} />
                <p>stock</p>
            </button>
        </div>
    )
}

export default Toolbar;