import { getDataAction } from "./getDataAction";

export const productsAction = () => {
    return getDataAction('http://localhost:3333/products/all', 'GET_PRODUCTS_SUCCESS', 'GET_PRODUCTS_ERROR');
}