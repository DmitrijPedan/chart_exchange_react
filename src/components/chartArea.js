import React from 'react';
import ButtonDefault from '../components/buttons/default';
import DatesPicker from './datesPicker';
import ChartComponent from './chartComponent';

function ChartArea () {
    return (
        <div className = "toolbar-element chartElement hidden">
            <ButtonDefault inner ={'Исходные данные'}/>
            <DatesPicker />
            <ChartComponent />
        </div>
    )
}

export default ChartArea;