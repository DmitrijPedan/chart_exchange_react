import moment from 'moment';
import {borderColors} from '../config/chartConfig';

export const getChartData = (period, dates, currencies) => {
    console.log(period);
    
    return {
        labels: dates.map(el => moment(el).format('DD.MM.YYYY')),
        datasets: currencies.map(code => {
            let rates = period.map(el => el.find(elem => elem.cc === code))
            console.log(rates)
            return {
                label: code,
                data: rates.map(el => el ? el.rate : null),
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