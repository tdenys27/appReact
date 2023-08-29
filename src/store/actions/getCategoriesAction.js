import { getDataAction } from './getDataAction';

export const categoriesAction = () => {
    return getDataAction('http://localhost:3333/categories/all', 'GET_CATEGORIES_SUCCESS', 'GET_CATEGORIES_ERROR');
}