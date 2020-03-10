import { SET_DATES_RANGE } from "../constants";
import {createArrayOfDates} from '../../services/createArrayOfDates'

const SetDatesRange = (data) => ({
        type: SET_DATES_RANGE,
        payload: data,
})

export const actionSetDatesRange = ({from, to}) => (dispatch) => {
    dispatch(SetDatesRange(createArrayOfDates(from, to)))
}

