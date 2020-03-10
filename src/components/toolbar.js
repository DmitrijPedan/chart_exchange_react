import React from 'react';
import {connect} from 'react-redux';
import {actionSetTodayData} from '../store/actions/fetchTodayAction';
import {switchDisplay} from '../services/switchDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faTable} from '@fortawesome/free-solid-svg-icons';
import '../styles/toolbar.css';

function Toolbar (props) {

    const onClickHandler = (targ) => {
        const id = Boolean(targ.id) ? targ.id : targ.parentNode.id
        switchDisplay(id); 
        id === 'table' && props.fetchTodayHandler();
    }

    return (
        <div className = "toolbar">
            <button id = "line" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon= {faChartLine}/> 
                <p>Line</p>
            </button>
            <button id = "bar" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon={faChartBar} />
                <p>Bar</p>
            </button>
            <button id = "table" onClick = {(e) => onClickHandler(e.target)}>
                <FontAwesomeIcon icon={faTable} />
                <p>Table</p>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodayHandler: () => dispatch(actionSetTodayData()),
});

export default connect(null, mapDispatchToProps)(Toolbar);