import axios from "axios";

export const saleFormAction = (tel) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3333/order/send', tel);
            console.log(response);

            dispatch({type: 'SEND_COUPON_SUCCESS', payload: {...tel, id: response.data}})

        } catch(e) {
            dispatch({type: 'SEND_COUPON_ERROR', error: e.message})
        }
    }
}