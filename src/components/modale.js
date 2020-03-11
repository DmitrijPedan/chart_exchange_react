import React  from 'react';
import CloseButton from './buttons/close';
import CodesCheckbox from './codesCheckbox';
import DatesPicker from './datesPicker';
import '../styles/modale.css';

function Modale (props) {

    return (
        <div className = "modal-overlay">
            <div className = "modal-window">
                <div className = "modal-header">
                    <p>Выберите валюту и период</p>
                    <div className = "close-btn">
                        <CloseButton  action = {props.action} />
                    </div>
                </div>
                <div className = "modal-body">
                    <CodesCheckbox/>
                    <DatesPicker action = {props.action}/>
                </div>
            </div>
        </div>
    )
}

export default Modale;