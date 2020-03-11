import React  from 'react';
import CloseButton from './buttons/close';
import DatesPicker from './datesPicker';

import '../styles/modale.css';

function Modale (props) {

    return (
        <div className = "modal-overlay">
            <div className = "modal-window">
                <div className = "modal-header">
                        <p>Параметры графика</p>
                        <div className = "close-btn">
                            <CloseButton  action = {props.action} />
                        </div>
                </div>
                <div className = "modal-body">
                    <DatesPicker />
                </div>
            </div>
        </div>
    )
}

export default Modale;