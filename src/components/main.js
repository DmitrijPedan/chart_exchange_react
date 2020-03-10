import React from 'react';
import Toolbar from '../components/toolbar';
import ChartComponent from '../components/chart';
import FormSetDates from '../components/formSetDates';
import Table from '../components/table';
import '../styles/main.css'

function Main () {
    return (
        <main>
            <div className = "main-wrapper">
                <Toolbar />
                <div className = "data-area">
                    <ChartComponent />
                    <FormSetDates />
                    <Table />
                </div>
            </div>
        </main>
    )
}

export default Main;