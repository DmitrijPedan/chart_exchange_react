import { URL_REST_COUNTRIES } from '../config/urlConstants';

const fetchRestCountries = async () => {
    try {
        const res = await fetch(URL_REST_COUNTRIES);
        return await res.json();
    } catch (err) {
        console.error(`Error in fetch-restcountries:`, err);
    } 
}

export default fetchRestCountries;