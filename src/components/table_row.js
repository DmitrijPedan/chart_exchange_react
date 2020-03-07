import React from 'react';

function TableRow (props) {
    return (
        <tr>
            <td className = "td-code"> <p>{props.row.cc} </p></td>
            <td className = "td-currency"><p>{props.row.txt}</p></td>
            <td className = "td-rate"><p> <span> { Math.ceil((props.row.rate*100)) / 100}</span>UAH</p></td>
        </tr>
    )
}

export default TableRow;