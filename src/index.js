// ******* //
// Imports //
// ******* //
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import * as serviceWorker from './serviceWorker';

// Redux boilerplate
import reducers from "./Reducers";
import rootSaga from "./Sagas";

// Components
import AppRouter from './AppRouter';

// Styles
import './index.scss';

// ***** //
// Setup //
// ***** //
// Setup Redux and middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);


ReactDOM.render(<AppRouter store={store} />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
