import moment from 'moment';
import {store} from '../store/createStore';
import {borderColors} from '../config/chartConfig';

export const getDatasets = (arr) => {
    const codes = store.getState().arrayOfCurrencies;
    return codes.map(code => {
        let rates = arr.map(el => el.find(elem => elem.cc === code))
        return {
            label: code,
            data: rates.map(el => el.rate),
            borderColor: [borderColors[Math.floor(Math.random() * borderColors.length)]],
            borderWidth: 1
        }    
    }) 
}

export const getChartData = (arr) => {
    const dates = store.getState().arrayOfDates;
    return {
        labels: dates.map(el => moment(el).format('DD.MM.YYYY')),
        datasets: getDatasets(arr)
    }
} 