export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART', 
        payload: product
    }
}
export const removeProductFromCart = (productId) => {
    return {
        type: 'REMOVE_PRODUCT_FROM_CART', 
        payload: productId
    }
}
export const incrementProductInCart = (productId) => {
    return {
        type: 'INCREMENT_PRODUCT_IN_CART', 
        payload: productId
    }
}

export const decrementProductInCart = (productId) => {
    return {
        type: 'DECREMENT_PRODUCT_IN_CART', 
        payload: productId
    }
}

export const removeProductsInCart = (product) => {
    return {
        type: 'REMOVE_PRODUCTS_IN_CART', 
        payload: product
    }
}

