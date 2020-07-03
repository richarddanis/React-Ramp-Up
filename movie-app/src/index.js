import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import * as serviceWorker from './serviceworker/serviceWorker';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';
import '../node_modules/uikit/dist/js/uikit-icons.min.js';

import thunk from 'redux-thunk';
import detailsReducer from './store/reducers/detail';
import movieReducer from './store/reducers/movie';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
     detailsReducer, 
     movies: movieReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
     return next => {
         return action => {
             console.log('[Middleware] Dispatching', action);
             const result = next(action);
             console.log('[Middleware] next state', store.getState());
             return result;
         }
     }
 };

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
