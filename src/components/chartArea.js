import React, {useState} from 'react';
import ButtonDefault from './buttons/default';
import ChartInitialData from './chartInitialData';
import ChartComponent from './chartComponent';

const ChartArea = () => {

    const [modalStatus, setModalStatus] = useState(false);
   
    return (
        <div className = "toolbar-element chartElement">
            <ButtonDefault action = {() => setModalStatus(!modalStatus)} inner = {'Исходные данные'}/>
            {modalStatus && <ChartInitialData  action = {() => setModalStatus(!modalStatus)} /> }
            <ChartComponent />
        </div>
    )
}

export default ChartArea;