const initialState = {
    carts: [],
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const productCart = state.carts.find((item) => item.id === action.payload.id);
            let productCartArr = [];

            if (productCart) {
                productCartArr = state.carts.map((elem) => elem === productCart 
                    ?
                        { ...elem, quantity: elem.quantity + 1 }
                    : 
                        elem
                    )
            } else {
                productCartArr = [ ...state.carts, { ...action.payload, quantity: 1 } ]
            }

            return {
                ...state,
                carts: productCartArr,
            };

        case 'REMOVE_PRODUCT_FROM_CART':
            const product = state.carts.filter((item) => item.id !== action.payload);

            return {
                ...state, 
                carts: product
            };

        case 'INCREMENT_PRODUCT_IN_CART':
            const productCartInc = state.carts.map(
                (elem) => elem.id === action.payload
                    ? 
                        { ...elem, quantity: elem.quantity + 1 }
                    : 
                        elem
                    );
                    
            return {
                ...state, 
                carts: productCartInc
            };

        case 'DECREMENT_PRODUCT_IN_CART':
            const productCartIndex = state.carts.findIndex((elem) => elem.id === action.payload);
            let productCartDec = [];
            
            if (state.carts[productCartIndex].quantity === 1) {
                productCartDec = state.carts.filter((item) => item.id !== action.payload);
            } else {
                productCartDec = state.carts.map((elem) => elem.id === action.payload
                    ? 
                        {...elem, quantity: elem.quantity < 1 ? 'empty' : elem.quantity - 1}
                    :
                        elem
                    );
            }
            
            return {
                ...state, 
                carts: productCartDec
            };


        case 'REMOVE_PRODUCTS_IN_CART':
            return {
                ...state, 
                carts: []
            };

        default :
            return state;    
    }
}