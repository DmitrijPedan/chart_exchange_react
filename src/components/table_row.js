import React from 'react';
import {connect} from 'react-redux';
import {setCountriesInfoData} from '../store/actions/countryInfoActions';

const TableRow = ({row, setDataForModal}) => {

    const rate = Math.ceil(row.rate*100)/100;
    const prewrate = Math.ceil(row.prewrate*100)/100;
    const difference = Math.ceil((rate - prewrate)*100)/100;
       
    return (
        <tr>
            <td className = "td-countries " title = "Смотреть..." onClick = {() => setDataForModal(row.countries)}>
               {row.countries.length > 0 ? <div><p>стран: {row.countries.length}</p></div> : <p>Нет инфо</p> } 
            </td>
            <td className = "td-currency" ><p>{row.txt}</p></td>
            <td className = "td-code"> <p>{row.cc} </p></td>
            <td className = "td-rate"><p>{rate.toFixed(2)}</p></td>
            <td className = "td-difference"> 
                {difference > 0 && <span className = "rate-up">&uArr; {difference.toFixed(2)}</span>}
                {difference < 0 && <span className = "rate-down">&dArr; {difference.toFixed(2)}</span>}
                {difference === 0 && <span className = "rate-flat">&hArr; {difference.toFixed(2)}</span>}
            </td>
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setDataForModal: (data) => dispatch(setCountriesInfoData(data)),
})


export default connect(null, mapDispatchToProps)(TableRow); 