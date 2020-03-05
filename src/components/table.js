import React from 'react';
import { connect } from 'react-redux';
import TableRow from './table_row';
import './table.css'

function Table (props) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <p className = "trans-min">Country<br/><span>click to sort</span></p>
                    </th>
                    <th>
                        <p className = "trans-min">Currency<br/><span>click to sort</span></p>
                    </th>
                    <th>
                        <p className = "trans-min">Rate<br/><span>click to sort</span></p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.exchangeRate.map((el, i) => <TableRow key = {i} row = {el}/>)}
            </tbody>
        </table>
    )
}

export default connect()(Table);