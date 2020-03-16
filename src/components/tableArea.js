import React from 'react';
import ModalCountriesInfo from './modalCountriesInfo';
import Table from './table';

const TableArea = () => {

    return (
        <div className = "toolbar-element tableElement hidden">
            <ModalCountriesInfo/>
            <Table/>
        </div>
    )
}

export default TableArea;