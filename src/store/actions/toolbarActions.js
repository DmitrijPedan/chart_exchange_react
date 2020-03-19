import {TOOLBAR_SHOW_CHART, TOOLBAR_SHOW_TABLE, TOOLBAR_SHOW_STOCKS} from '../constants';

export const showChart = () => ({
    type: TOOLBAR_SHOW_CHART,
})

export const showTable = () => ({
    type: TOOLBAR_SHOW_TABLE,
})

export const showStocks = () => ({
    type: TOOLBAR_SHOW_STOCKS,
})