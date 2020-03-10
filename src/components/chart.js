import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import DatesPicker from './datesPicker'
import {Chart} from 'chart.js';
import '../styles/chart.css';



function ChartComponent (props) {
    
    console.log('chart props', typeof(props.period), props.period.length);
    
    useEffect(()=> {
       
        const ctx = document.getElementById('newChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9],
                datasets: [{
                    label: '# of Votes',
                    data: [12,25,34,24,15,26,47,38,29],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                }
            }
        });
    })

    return (
        <div className = "toolbar-element line hidden">
            < DatesPicker />
            <canvas id="newChart" width="400" height="400"></canvas>
        </div>
    )
}

const mapStateToProps = (state) => ({
    period: state.periodExchange,
})

export default connect(mapStateToProps)(ChartComponent);