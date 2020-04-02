import React, {useState} from 'react';
import ButtonDefault from './buttons/default';
import ChartInitialData from './chartInitialData';
import ChartComponent from './chartComponent';

const ChartArea = () => {

    const [modalStatus, setModalStatus] = useState(true);
   
    return (
        <div>
            <ButtonDefault action = {() => setModalStatus(!modalStatus)} inner = {'Исходные данные'}/>
            {modalStatus && <ChartInitialData  action = {() => setModalStatus(!modalStatus)} /> }
            <ChartComponent />
        </div>
    )
}

export default ChartArea;