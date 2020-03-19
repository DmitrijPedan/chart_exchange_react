import moment from 'moment';
import {borderColors} from '../config/chartConfig';

export const getChartData = (period, dates, currencies) => {
    return {
        labels: dates.map(el => moment(el).format('DD.MM.YYYY')),
        datasets: currencies.map(code => {
            let rates = period.map(el => el.find(elem => elem.cc === code))
            return {
                label: code,
                data: rates.map(el => el.rate),
                backgroundColor: ['rgba(255, 255, 255, 0)'],
                borderColor: [borderColors[Math.floor(Math.random() * borderColors.length)]],
                borderWidth: 1,
                pointBackgroundColor: 'dodgerblue',
                pointRadius: 1,
                // lineTension: 0
            }    
        })
    }
} 