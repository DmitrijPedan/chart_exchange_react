import {SET_WS_CONNECTION} from '../constants';

export const actionSetWSConnection = (ws) => ({
    type: SET_WS_CONNECTION,
    payload: ws,
})