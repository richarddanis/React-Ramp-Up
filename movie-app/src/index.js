import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import * as serviceWorker from './serviceworker/serviceWorker';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';
import '../node_modules/uikit/dist/js/uikit-icons.min.js';

import detailsReducer from './store/reducers/detail';
import movieReducer from './store/reducers/movie';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    details: detailsReducer,
    movie: movieReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
