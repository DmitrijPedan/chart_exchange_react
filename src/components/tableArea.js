import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import fetchRestCountries from '../services/fetchRestCountries';
import {actionSetRestCountries} from '../store/actions/fetchRestCountriesAction';
import {actionSetTodayData} from '../store/actions/fetchTodayAction';
import CountyInfo from './tableCountryInfo';
import Table from './table';

const TableArea = ({fetchCountriesData, fetchTodayData}) => {

    useEffect(() => {
        (async () => fetchCountriesData(await fetchRestCountries()))();
        fetchTodayData();
    })

    return (
        <div>
            <CountyInfo/>
            <Table/>
        </div>
    )
}

const mapDispatchToProps = () => dispatch => ({
    fetchCountriesData: (countries) => dispatch(actionSetRestCountries(countries)),
    fetchTodayData: () => dispatch(actionSetTodayData()),
})

export default connect(null, mapDispatchToProps)(TableArea);