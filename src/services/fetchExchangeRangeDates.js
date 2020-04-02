import { URL_NBU_DATES } from '../config/urlConstants';

const fetchExchangeRangeDates = (arr) => Promise.all(arr.map(async (el) => {
    const response = await fetch(URL_NBU_DATES + el);
    return await response.json()
}));

export default fetchExchangeRangeDates;


