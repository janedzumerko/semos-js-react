import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './store/reducer';
import authReducer from './store/reducers/authentication';
import counterReducer from './store/reducers/counter';
import storeCounter from './store/reducers/storeCounters';

const rootReducer = combineReducers({
    ctrR: counterReducer,
    authR: authReducer,
    allCountsR: storeCounter
})

const ourStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ourStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
