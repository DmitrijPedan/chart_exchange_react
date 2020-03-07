import { URL_NBU_TODAY } from './urlConstants';

const fetchTodayExchange = async () => {
    try {
        const response = await fetch(URL_NBU_TODAY);
        return await response.json();
    } catch (err) {
        console.error(`Error in fetch-today:`, err);
    } 
}

export default fetchTodayExchange;