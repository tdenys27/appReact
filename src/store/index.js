import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import persistedReducer from './reducers/reducers';

export const store = createStore(persistedReducer, applyMiddleware(thunk));