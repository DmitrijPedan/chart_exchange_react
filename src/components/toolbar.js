import React from 'react';
import {connect} from 'react-redux';
import {showChart, showTable, showStocks} from '../store/actions/toolbarActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine, faTable, faChartArea} from '@fortawesome/free-solid-svg-icons';
import '../styles/toolbar.css';

const Toolbar = ({showChart, showTable, showStocks}) => {

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
            <button onClick = {showStocks}>
                <FontAwesomeIcon icon={faChartArea} />
                <p>stock</p>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showChart: () => dispatch(showChart()),
    showTable: () => dispatch(showTable()),
    showStocks: () => dispatch(showStocks()),
});

export default connect(null, mapDispatchToProps)(Toolbar);