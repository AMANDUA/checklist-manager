import {TOGGLE_CHECK, UNCHECK} from './constants'

export const toggleCheckBoxAction = (params) => (dispatch) => {
    dispatch({
        type: TOGGLE_CHECK,
        payload: {
            checkbox: params,
            checkList: params.parentElement,
        },
    });
}

export const unCheckAction = (id, params) => (dispatch) => {
    dispatch({
        type: UNCHECK,
        payload: {
            checkboxId: id,
            checkList: params.parentElement.parentElement,
        },
    });
}
