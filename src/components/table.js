import React from 'react';
import { connect } from 'react-redux';
import TableRow from './table_row';
import '../styles/table.css'

function Table ({today}) {
    return (
        <table  className = "toolbar-element table hidden">
            <thead>
                <tr>
                    <th><p className = "trans-min">Код<br/><span>click to sort</span></p></th>
                    <th><p className = "trans-min">Валюта<br/><span>click to sort</span></p></th>
                    <th><p className = "trans-min">Курс<br/><span>click to sort</span></p></th>
                </tr>
            </thead>
            <tbody>
                {today.map((el, i) => <TableRow key = {i} row = {el}/>)}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    today: state.arrayOfCurrencies.today,
})

export default connect(mapStateToProps)(Table);