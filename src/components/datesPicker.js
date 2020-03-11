import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionSetDatesRange} from '../store/actions/setDatesRangeAction';
import {actionSetCurrencies} from '../store/actions/setCurrenciesAction';
import {actionSetExchangeData} from '../store/actions/fetchPeriodAction';
import DayPicker, {DateUtils} from 'react-day-picker';
import {MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, DISABLED_DAYS} from '../config/datePickerConfig';
import "react-day-picker/lib/style.css";
import '../styles/datePicker.css';

function DatesPicker (props) {
    
    const checkboxesArray = [...document.getElementsByClassName('codecheck')];

    const initState = {
        from: undefined,
        to: undefined,
    }
    
    const [state, setState] = useState(initState)
    const { from, to } = state;
    const modifiers = { start: from, end: to };
       
    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, state);
        setState(range);
    }

    const handleResetClick = () => setState(initState);

    const handleConfirmClick = () => {
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
                modifiers = {modifiers}
                onDayClick = {handleDayClick}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={0}
                disabledDays={DISABLED_DAYS}
            />
            <div className="rangeDatesButtons">
                {from && to && (<button className="link" onClick={handleResetClick}>Сбросить</button>)}
                {from && to && (<button className="link" onClick={handleConfirmClick}>Применить</button>)}
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    actionSetDatesRangeHandler: (dates) => dispatch(actionSetDatesRange(dates)),
    actionSetCurrenciesHandler: (codes) => {
        codes.length > 0 ? dispatch(actionSetCurrencies(codes)) : dispatch(actionSetCurrencies(['USD']))
    },
    actionSetExchangeHandler: () => dispatch(actionSetExchangeData())
});

export default connect(null, mapDispatchToProps)(DatesPicker);