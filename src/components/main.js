import React from 'react';
import { connect } from 'react-redux';
import { actionSetTodayData } from '../store/actions/fetchToday';
import Chart from '../components/chart';
import FormSetDates from '../components/formSetDates';
import Table from '../components/table';

import '../styles/main.css'


function Main (props) {

    const changeWiew = (id) => {
        let elements = document.getElementsByClassName('toolbar-element');
        [].map.call(elements, el => {
            el.classList.contains(id) ? el.classList.remove('hidden') : el.classList.add('hidden');
        })}

    const onClickHandler = (id) => {
        changeWiew(id); 
        props.actionSetExchangeHandler();
    }
     
    return (
        <main>
            <div className = "main-wrapper">
                <div className = "toolbar">
                    <button id = "line" onClick = {(e) => onClickHandler(e.target.id)}>Line</button>
                    <button id = "bar" onClick = {(e) => onClickHandler(e.target.id)}>Bar</button>
                    <button id = "table" onClick = {(e) => onClickHandler(e.target.id)}>Table</button>
                </div>
                <div className = "data-area">
                    <Chart />
                    <FormSetDates />
                    <Table />
                </div>
            </div>
        </main>
    )
}

const mapDispatchToProps = (dispatch) => ({
    actionSetExchangeHandler: () => dispatch(actionSetTodayData())
});

export default connect(null, mapDispatchToProps)(Main);