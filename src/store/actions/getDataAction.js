import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

export const getDataAction = (url, getType, getError) => {
    return async (dispatch) => {
        try {
            const response = await trackPromise(axios.get(url));
            dispatch({ type: getType, payload: response.data })
        } catch (e) {
            dispatch({ type: getError, error: e.message })
        }
    };
}