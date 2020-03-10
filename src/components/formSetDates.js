import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionSetDatesRange } from '../store/actions/setDatesRangeAction';
import { actionSetExchangeData } from '../store/actions/fetchPeriodAction';

function FormSetDates (props) {

    const [dates, setDates] = useState(['20200301', '20200302', '20200303', '20200304', '20200305', '20200306']);
    
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