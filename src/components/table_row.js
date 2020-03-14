import React from 'react';

const TableRow = ({row}) => {

    const difference = row.rate - row.prewrate;

    return (
        <tr>
            <td className = "td-countries" title = "Смотреть...">
               {row.countries.length > 0 ? <div><p>стран: {row.countries.length}</p></div> : <p>Нет инфо</p> } 
            </td>
            <td className = "td-currency" ><p>{row.txt}</p></td>
            <td className = "td-code"> <p>{row.cc} </p></td>
            <td className = "td-rate"><p>{ row.rate.toFixed(3) }</p></td>
            <td className = "td-difference"> 
                {difference > 0 && <span className = "rate-up">&uArr; {difference.toFixed(3)}</span>}
                {difference < 0 && <span className = "rate-down">&dArr; {difference.toFixed(3)}</span>}
                {difference === 0 && <span className = "rate-flat">&hArr; {difference.toFixed(0)}</span>}
            </td>
        </tr>
    )
}

export default TableRow; 