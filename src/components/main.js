import React from 'react';
import Chart from './chart'
import FormSetDates from './formSetDates';
import '../styles/main.css'

function Main () {
    return (
        <main>
            <div className = "container">
                <FormSetDates />
                <Chart />
            </div>
        </main>
    )
}

export default Main;