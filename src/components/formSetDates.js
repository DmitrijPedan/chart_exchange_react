import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionSetDatesRange } from '../store/actions/setDatesRange';
import { actionSetExchangeData } from '../store/actions/fetchExchangeData';

function FormSetDates (props) {

    const [dates, setDates] = useState([]);
    
    const onClickHandler = () => {
        props.actionSetDatesRangeHandler(dates);
        props.actionSetExchangeHandler()
    }
    
    return (
        <div className = "toolbar-element bar hidden">
            <input type="number" onInput = {event => setDates(event.target.value)}/>
            <button onClick = {onClickHandler}>Set</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    actionSetDatesRangeHandler: (arg) => dispatch(actionSetDatesRange(arg)),
    actionSetExchangeHandler: () => dispatch(actionSetExchangeData())
});

export default connect(null, mapDispatchToProps)(FormSetDates);