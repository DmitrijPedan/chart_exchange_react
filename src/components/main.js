import React from 'react';
import Toolbar from '../components/toolbar';
import ChartComponent from '../components/chart';
import Table from '../components/table';
import '../styles/main.css'

function Main () {
    return (
        <main>
            <div className = "main-wrapper">
                <Toolbar />
                <div className = "data-area">
                    <ChartComponent />
                    <Table />
                </div>
            </div>
        </main>
    )
}

export default Main;