import { URL_NBU_DATES } from './urlConstants';

const fetchExchangeRangeDates = (arr) => {
    let result = [];
    Promise.all(arr.map(async (el) => {
        const response = await fetch(URL_NBU_DATES + el);
        return await response.json();
        }))
        .then((response) => result.push(...response)); 
    return result;
}

export default fetchExchangeRangeDates;