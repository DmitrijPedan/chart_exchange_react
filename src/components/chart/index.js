import React from 'react';
import './chart.css'
import { connect } from 'react-redux';
import { store } from '../..';

function Chart (props) {
    console.log('props in Chart', props.arrayOfCurrenciesProps);
    return (
        <div></div>
    )
}

const mapStateToProps = (state) => ({
    arrayOfCurrenciesProps: state.arrayOfCurrencies,
})

export default connect(mapStateToProps)(Chart);