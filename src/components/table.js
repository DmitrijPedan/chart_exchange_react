import React from 'react';
import {connect} from 'react-redux';
import {sortArray} from '../services/sortArray'
import {setSortedData} from '../store/actions/sortDataAction'
import TableRow from './table_row';
import '../styles/table.css'


function Table ({today, actionSortDataHandler}) {
 
    const onClickHandler = (arr, key) => {
        actionSortDataHandler(sortArray(arr, key))
    }

    return (
        <div className = "toolbar-element table hidden">
            <table>
                <thead>
                    <tr>
                        <th onClick = {() => onClickHandler(today, 'cc')}>
                            <p className = "trans-min">Код<br/><span>click to sort</span></p>
                            </th>
                        <th onClick = {() => onClickHandler(today, 'txt')}>
                            <p className = "trans-min">Валюта<br/><span>click to sort</span></p>
                            </th>
                        <th onClick = {() => onClickHandler(today, 'rate')}>
                            <p className = "trans-min">Курс<br/><span>click to sort</span></p>
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