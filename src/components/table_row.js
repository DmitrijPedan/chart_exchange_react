import React from 'react';

const TableRow = ({row}) => {
    return (
        <tr>
            <td className = "td-currency"><p>{row.txt}</p></td>
            <td className = "td-code"> <p>{row.cc} </p></td>
            <td className = "td-rate"><p>{ row.rate.toFixed(3) }</p></td>
            <td> 
                {row.rate > row.prewrate && <span className = "rate-up">&uarr;</span>}
                {row.rate < row.prewrate && <span className = "rate-down">&darr;</span>}
                {row.rate === row.prewrate && <span className = "rate-flat">&harr;</span>}
            </td>
            <td className = "td-rate">
                <p>{(row.rate - row.prewrate).toFixed(2)}</p>
            </td>
        </tr>
    )
}

export default TableRow; 