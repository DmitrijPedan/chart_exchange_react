import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Chart} from 'chart.js';
import {chartOptions} from '../config/chartConfig';
import {getChartData} from '../services/getChartData';
import '../styles/chart.css';


const ChartComponent = ({period}) => {
    
    useEffect(()=> {
        const ctx = document.getElementById('newChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: getChartData(period),
            options: chartOptions,
        });
    })

    return (
        <div className = "toolbar-element chartElement hidden">
            <canvas className = "chartLine" id="newChart" width="200" height="150"></canvas>
        </div>
    )
}

const mapStateToProps = (state) => ({
    period: state.periodExchange,
})

export default connect(mapStateToProps)(ChartComponent);