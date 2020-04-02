import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionSetDatesRange} from '../store/actions/setDatesRangeAction';
import {actionSetCurrencies} from '../store/actions/setCurrenciesAction';
import {actionSetExchangeData} from '../store/actions/fetchPeriodAction';
import DayPicker, {DateUtils} from 'react-day-picker';
import {MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, DISABLED_DAYS} from '../config/datePickerConfig';

import '../styles/datePicker.css';
import "react-day-picker/lib/style.css";

const DatesPicker = (props) => {
    
    const checkboxesArray = [...document.getElementsByClassName('codecheck')];

    const initState = {from: undefined, to: undefined};
    
    const [state, setState] = useState(initState);
    const {from, to} = state;
       
    const confirmHandleClick = () => {
        props.actionSetCurrenciesHandler(checkboxesArray.map(el => el.checked && el.value).filter(el => el));
        props.actionSetDatesRangeHandler(state);
        props.actionSetExchangeHandler();
        props.action();
    }

    return (
        <div className="rangeDatesDays">
            <p>
                {!from && !to && `Начальная дата`}
                {from && !to && `Конечная дата`}
                {from && to && `Выбрано с ${from.toLocaleDateString()} по ${to.toLocaleDateString()}`}
            </p>
            <DayPicker
                className="Selectable"
                numberOfMonths = {1}
                selectedDays = {[from, { from, to }]}
                modifiers = {{ start: from, end: to }}
                onDayClick = {(day) => setState(DateUtils.addDayToRange(day, state))}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={0}
                disabledDays={DISABLED_DAYS}
            />
            <div className="rangeDatesButtons">
                <button className="link" 
                    onClick={() => setState(initState)}
                    disabled = {from && to ? "" : "disabled"} >
                    Сбросить
                </button>
               <button className="link" 
                    onClick={confirmHandleClick}
                    disabled = {from && to ? "" : "disabled"} >
                    Применить
               </button>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    actionSetDatesRangeHandler: (dates) => dispatch(actionSetDatesRange(dates)),
    actionSetCurrenciesHandler: (codes) => dispatch(actionSetCurrencies(codes)),
    actionSetExchangeHandler: () => dispatch(actionSetExchangeData())
});

export default connect(null, mapDispatchToProps)(DatesPicker);