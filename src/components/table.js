import React from 'react';
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
                        <th><p>Инфо</p></th>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'txt'))}>
                            <p className = "th-currency actionable">Валюта</p>
                        </th>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'cc'))}>
                            <p className = "th-code actionable">Код</p>
                        </th>
                        <th onClick = {() => actionSortDataHandler(sortArray(today, 'rate'))}>
                            <p className = "th-rate actionable">Курс</p>
                        </th>
                        <th>
                            <p className = "th-rate">Прирост</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {today.map((el, i) => <TableRow key = {i} row = {el} />)}
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