import React  from 'react';
import {currencyArray} from '../config/currencyCodes'
import '../styles/codesCheckbox.css';

function CodesCheckbox () {
    return (
        <div className="codesCheckboxes">
            <p>Валюта:</p>
            {currencyArray.map((el, i) => (
                <div key = {i}>
                    <input className ="codecheck" value = {el.cc} type="checkbox" name={el.cc} ></input>
                    <label htmlFor = {el.cc}> {el.txt} </label>
                </div>
            ))}
        </div>
    )
}

export default CodesCheckbox;