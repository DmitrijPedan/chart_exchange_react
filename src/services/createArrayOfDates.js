import moment from 'moment';

export const createArrayOfDates = (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const differ = end.diff(start, 'days');
    return [...new Array(differ + 1)].map((el, i) => start.clone().add(i, 'd').format('YYYYMMDD'));
}