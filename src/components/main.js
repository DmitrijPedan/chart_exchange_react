import React from 'react';
import {connect} from 'react-redux'
import Toolbar from './toolbar';
import ChartArea from './chartArea';
import TableArea from './tableArea';
import '../styles/main.css'

const Main = ({wiews}) => {
    return (
        <main>
            <div className = "main-wrapper">
                <Toolbar />
                <div className = "data-area">
                    {wiews.toolbarChart && <ChartArea />}
                    {wiews.toolbarTable && <TableArea />}
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    wiews: state.toolbar,
})

export default connect(mapStateToProps)(Main);