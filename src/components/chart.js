import React from 'react';
import '../styles/chart.css'
import { connect } from 'react-redux';

function Chart ({data}) {
    return (
        <div className = "toolbar-element line hidden">
            <h1>Chart</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.arrayOfCurrencies.data,
})

export default connect(mapStateToProps)(Chart);