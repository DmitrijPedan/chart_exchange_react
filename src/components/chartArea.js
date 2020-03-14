import React, {useState} from 'react';
import ButtonDefault from './buttons/default';
import Modale from './modale';
import ChartComponent from './chartComponent';

const ChartArea = () => {

    const [modalStatus, setModalStatus] = useState(false);
   
    return (
        <div className = "toolbar-element chartElement hidden">
            <ButtonDefault action = {() => setModalStatus(!modalStatus)} inner = {'Исходные данные'}/>
            {modalStatus && <Modale  action = {() => setModalStatus(!modalStatus)} /> }
            <ChartComponent />
        </div>
    )
}

export default ChartArea;