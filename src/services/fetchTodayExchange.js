import { URL_NBU_TODAY } from './urlConstants';

const fetchTodayExchange = async () => {
    try {
        const response = await fetch(URL_NBU_TODAY);
        const result = await response.json();
        console.log('today: ', result);        
        return result
    } catch (err) {
        console.error(`Error in fetch-today:`, err);
    } 
}

export default fetchTodayExchange;