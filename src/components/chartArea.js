import React, {useState} from 'react';
import ButtonDefault from './buttons/default';
import Modale from './modale';
import ChartComponent from './chartComponent';

function ChartArea () {

    const [modalStatus, setModalStatus] = useState(false);
    const switchModale = () => setModalStatus(!modalStatus)

    return (
        <div className = "toolbar-element chartElement hidden">
            <ButtonDefault action = {switchModale} inner = {'Исходные данные'}/>
            {modalStatus && <Modale action = {switchModale}/> }
            <ChartComponent />
        </div>
    )
}

export default ChartArea;