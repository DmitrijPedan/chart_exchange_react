import React, {useState} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT, DISABLED_DAYS} from '../config/datePickerLocale';
import "react-day-picker/lib/style.css";
import '../styles/datePicker.css'


function DatesPicker  () {

    const initState = {
        from: undefined,
        to: undefined,
    }
    
    const [state, setState] = useState(initState)
    const { from, to } = state;
    
    const modifiers = { start: from, end: to };

    console.log(state);
   
    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, state);
        setState(range);
    }

    const handleResetClick = () => setState(initState);

    return (
        <div className="rangeDates">
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
            <div>
                {from && to && (<button className="link" onClick={handleResetClick}>Сбросить</button>)}
                {from && to && (<button className="link" onClick={handleResetClick}>Применить</button>)}
            </div>
        </div>
    )
}

export default DatesPicker;