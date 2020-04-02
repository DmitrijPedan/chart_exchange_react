import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Chart} from 'chart.js';
import {chartOptions} from '../config/chartConfig';
import {getChartData} from '../services/getChartData';
import '../styles/chart.css';

const ChartComponent = ({period, dates, currencies}) => {

    useEffect(() => {                   
        const ctx = document.getElementById('newChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: getChartData(period, dates, currencies),
            options: chartOptions,
        });
    })

    return (
        <div>
            <canvas className = "chartLine" id="newChart" width="200" height="150"></canvas>
        </div>
    ) 
}

const mapStateToProps = (state) => ({
    period: state.periodExchange,
    dates: state.arrayOfDates,
    currencies: state.arrayOfCurrencies
})

export default connect(mapStateToProps)(ChartComponent);