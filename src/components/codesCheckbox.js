import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {currencyToCheck} from '../config/currencyCodes';
import '../styles/codesCheckbox.css';

const CodesCheckbox = ({currencies}) => {

    useEffect(() => {
        [...document.getElementsByClassName('codecheck')].forEach(el => {
            el.checked = currencies.includes(el.value) ? true : false
        })
    })

    return (
        <div className="codesCheckboxes">
            <p>Валюта:</p>
            {currencyToCheck.map((el, i) => (
                <div key = {i}>
                    <input className ="codecheck" value = {el.cc} type="checkbox" id={el.cc}>
                    </input>
                    <label htmlFor = {el.cc}> {el.txt} </label>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currencies: state.arrayOfCurrencies,
});

export default connect(mapStateToProps)(CodesCheckbox);