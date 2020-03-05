import React from 'react';

function TableRow (props) {
    
    return (
        <tr>
            <th>
                <div className ="flag-img trans-min" title = "See more ..." onClick = {switchModale}> 
                    <img src={props.row.flag} alt="flag"/>
                </div>
            </th>
            <td className = "td-country"> {props.row.name} </td>
            <td className = "td-currency"> {props.row.cc} <br/> <span> {props.row.txt} </span></td>
            <td className = "td-rate"> { Math.ceil((props.row.rate*100)) / 100} </td>
        </tr>
    )
}

export default TableRow;