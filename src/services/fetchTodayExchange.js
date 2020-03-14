import moment from 'moment';
import { URL_NBU_DATES } from '../config/urlConstants';

const fetchTodayExchange = async () => {
    try {
        const todayResponse = await fetch(URL_NBU_DATES + moment().format('YYYYMMDD'));
        const todayData = await todayResponse.json();
        const yesterdayResponse = await fetch(URL_NBU_DATES + moment().subtract(5, 'days').format('YYYYMMDD'));
        const yesterdayData = await yesterdayResponse.json();
        return todayData.map(el => el = {...el, prewrate: yesterdayData.find(e => e.cc === el.cc).rate});
    } catch (err) {
        console.error(`Error in fetch-today:`, err);
    } 
}

export default fetchTodayExchange;