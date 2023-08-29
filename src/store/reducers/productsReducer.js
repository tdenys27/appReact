const initialState = {
    products: [],
    error: null,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
            };

        case 'GET_PRODUCTS_ERROR':
            return {
                ...state,
                products: action.error,
            };

        default: 
            return state;
    }
}