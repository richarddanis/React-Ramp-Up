import React from 'react';
import ReactDOM from 'react-dom';
import {HelloCreateElement} from './helloCreateElement'
import {HelloCreateComponent} from "./helloCreateComponent";
import HelloPureComponent from "./helloPureComponent";

const helloMessage = (message) => 'Hello from ' + message

const helloFunctional = (message) => <div>{message}</div>

ReactDOM.render(
    // React.createElement(HelloCreateElement, {message: helloMessage('HelloCreateElement')}, null), //createElement
    // <HelloCreateComponent message={helloMessage('Component')}/>,  //createComponent
    // <HelloPureComponent message={helloMessage('PureComponent')}/>, //pureComponent
    helloFunctional(helloMessage('Function')), //functional
    document.getElementById('root')
);
