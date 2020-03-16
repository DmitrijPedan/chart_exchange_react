import { URL_WS_STOCKS } from '../config/urlConstants';

const createConnectionWS = () => {
    try {
        return new WebSocket(URL_WS_STOCKS);
    } catch (err) {
        console.log('error in ws connection', err);
    }
} 

export default createConnectionWS;