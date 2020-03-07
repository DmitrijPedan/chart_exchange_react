import React from 'react';
import {connect} from 'react-redux';
import '../styles/chart.css'



function Chart ({period}) {
    console.log('period', period);


    let usd = period.map(el => {
        el.filter(el => el.cc === 'USD')
    })
    
    console.log('usd', usd);

    return (
        <div className = "toolbar-element line hidden">
            <h1>Chart</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    period: state.arrayOfCurrencies.period,
})

export default connect(mapStateToProps)(Chart);