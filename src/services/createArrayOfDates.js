import moment from 'moment';

export const createArrayOfDates = (startDate, endDate) => {
    let result = []
    const start = moment(startDate);
    const end = moment(endDate);
    const differ = end.diff(start, 'days')
    for (let i = 0; i < differ + 1; i++) {
        result.push(start.clone().add(i, 'd').format('YYYYMMDD'))
    }
    return result;
}