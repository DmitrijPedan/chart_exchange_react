import React from 'react';
import '../styles/chart.css'
import { connect } from 'react-redux';

function Chart (props) {
    return (
        <div></div>
    )
}

const mapStateToProps = (state) => ({
    arrayOfCurrenciesProps: state.arrayOfCurrencies,
})

export default connect(mapStateToProps)(Chart);