import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionSetDatesRange } from '../../store/actions/setDatesRange';


function FormSetDates (props) {
    
    const [dates, setDates] = useState([]);

    const onClickHandler = () => props.foo(dates)
      
    return (
        <div>
            <input type="number" onInput = { event => setDates(event.target.value)}/>
            <button onClick = {onClickHandler}>Set</button>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    foo: (arg) => {
        dispatch({
            ...actionSetDatesRange,
            payload: arg,
    })}
});

export default connect(null, mapDispatchToProps)(FormSetDates);