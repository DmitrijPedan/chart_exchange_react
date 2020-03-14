import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {sortArray} from '../services/sortArray'
import {setSortedData} from '../store/actions/sortDataAction'
import TableRow from './table_row';
import '../styles/table.css'


const Table = ({today, actionSortDataHandler}) => {
    return (
        <div className = "toolbar-element tableElement hidden">
            <table>
                <thead>
                    <tr>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'txt'))}>
                            <p className = "th-currency">Валюта<br/><span>click to sort</span></p>
                        </th>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'cc'))}>
                            <p className = "th-code">Код<br/><span>click to sort</span></p>
                        </th>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'rate'))}>
                            <p className = "th-rate">Курс<br/><span>на {moment().format('DD.MM.YYYY')}</span></p>
                        </th>
                        <th colSpan="2">
                            <p className = "th-rate">Прирiст</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {today.map((el, i) => <TableRow key = {i} row = {el}/>)}
                </tbody>
            </table>
        </div>
        
    )
}

const mapStateToProps = (state) => ({
    today: state.todayExchange,
})

const mapDispatchToProps = (dispatch) => ({
    actionSortDataHandler: (arg) => dispatch(setSortedData(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);