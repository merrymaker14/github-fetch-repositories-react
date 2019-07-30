import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { watchLoadRepos } from './actions/reposActions';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchLoadRepos);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
