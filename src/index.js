import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist'

import 'bootstrap/dist/css/bootstrap.min.css';
import './ui/scss/style.scss'

import App from './components/app/App';
import { store } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);


root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);