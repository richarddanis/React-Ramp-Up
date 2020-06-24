import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceworker/serviceWorker';
import '../node_modules/uikit/dist/css/uikit.min.css';
import '../node_modules/uikit/dist/js/uikit.min.js';
import '../node_modules/uikit/dist/js/uikit-icons.min.js';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
