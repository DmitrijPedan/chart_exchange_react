import React from 'react';
import Toolbar from './toolbar';
import ChartArea from './chartArea';
import Table from './table';
import '../styles/main.css'

const Main = () => {
    return (
        <main>
            <div className = "main-wrapper">
                <Toolbar />
                <div className = "data-area">
                    <ChartArea />
                    <Table />
                </div>
            </div>
        </main>
    )
}

export default Main;