import React from 'react';
import { render } from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import App from './components/app.jsx';
import allReducers from './reducers';


const logger = createLogger();

const store = createStore(allReducers, applyMiddleware(thunk, logger));
render( <AppContainer><AppContainer>
	<Provider store={store}>
		<App />
	</Provider>
</AppContainer></AppContainer>,
	document.querySelector("#app"));


