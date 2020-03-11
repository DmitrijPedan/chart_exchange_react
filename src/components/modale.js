import React  from 'react';
import Button from '../buttons/confirm'
import CloseButton from '../buttons/close'

import './modale.css';

function Modale (props) {

    return (
        <div className = "modal-overlay">
            <div className = "modal-window">
                <div className = "modal-header">
                        <p>{props.row.name}</p>
                        <div className = "close-btn">
                            <CloseButton  action = {props.switchModale} />
                        </div>
                </div>
                <div className = "modal-body">
                    
                </div>
                <div className = "modal-footer">
                    <Button action = {props.switchModale} inside = {"Ok"}/>
                </div>
            </div>
        </div>
    )
}

export default Modale;