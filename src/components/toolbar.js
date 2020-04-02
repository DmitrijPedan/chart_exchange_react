import React from 'react';
import {connect} from 'react-redux';
import {showChart, showTable} from '../store/actions/toolbarActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine, faTable} from '@fortawesome/free-solid-svg-icons';
import '../styles/toolbar.css';

const Toolbar = ({showChart, showTable}) => {
    return (
        <div className = "toolbar">
            <button onClick = {showChart}>
                <FontAwesomeIcon icon= {faChartLine}/> 
                <p>chart</p>
            </button>
            <button onClick = {showTable}>
                <FontAwesomeIcon icon={faTable} />
                <p>table</p>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showChart: () => dispatch(showChart()),
    showTable: () => dispatch(showTable()),
});

export default connect(null, mapDispatchToProps)(Toolbar);