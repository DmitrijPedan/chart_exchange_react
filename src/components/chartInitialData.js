import React from 'react';
import CloseButton from './buttons/close';
import CodesCheckbox from './codesCheckbox';
import DatesPicker from './datesPicker';
import '../styles/modale.css';

const ChartInitialData = ({action}) => {
    
    return (
        <div className = "modal-overlay">
            <div className = "modal-window">
                <div className = "modal-header">
                    <p>Выберите валюту и период</p>
                    <div className = "close-btn">
                        <CloseButton  action = {action} />
                    </div>
                </div>
                <div className = "modal-body">
                    <CodesCheckbox/>
                    <DatesPicker action = {action}/>
                </div>
            </div>
        </div>
    )
}

export default ChartInitialData;