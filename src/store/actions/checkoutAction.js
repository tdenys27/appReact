import axios from "axios";

export const checkoutAction = (product) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3333/order/send', product);
            const newProductID = response.data.id;
            console.log(response);

            dispatch({type: 'SEND_ORDER_SUCCESS', payload: {...product, id: newProductID}})

        } catch(e) {
            dispatch({type: 'SEND_ORDER_ERROR', error: e.message})
        }
    }
}