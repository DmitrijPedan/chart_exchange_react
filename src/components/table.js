import React from 'react';
import {connect} from 'react-redux';
import {sortArray} from '../services/sortArray';
import {setSortedData} from '../store/actions/sortDataAction';
import TableRow from './table_row';
import '../styles/table.css'


const Table = ({today, actionSortDataHandler}) => {
   
    return (            
        <table>
            <thead>
                <tr>
                    <th>
                        <p>Инфо</p>
                        <span>restcountries</span>
                    </th>
                    <th onClick = {() => actionSortDataHandler(sortArray(today, 'txt'))}>
                        <p className = "th-currency actionable trans-min">Валюта</p>
                        <span>клик для сортировки</span>
                    </th>
                    <th onClick = {() => actionSortDataHandler(sortArray(today, 'cc'))}>
                        <p className = "th-code actionable trans-min">Код</p>
                        <span>клик для сортировки</span>
                    </th>
                    <th onClick = {() => actionSortDataHandler(sortArray(today, 'rate'))}>
                        <p className = "th-rate actionable trans-min ">Курс</p>
                        <span>клик для сортировки</span>
                    </th>
                    <th>
                        <p className = "th-rate">Прирост</p>
                        <span>на вчерашний день</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {today.map((el, i) => <TableRow key = {`table-row-${i}`} row = {el}/>)}
            </tbody>
        </table>       
    )
}

const mapStateToProps = (state) => ({
    today: state.todayExchange,
})

const mapDispatchToProps = (dispatch) => ({
    actionSortDataHandler: (arg) => dispatch(setSortedData(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);