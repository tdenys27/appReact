import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { categoriesReducer } from './categoriesReducer';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    category: categoriesReducer,
    product: productsReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;