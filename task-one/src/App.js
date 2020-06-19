import React, {Component} from "react";
import {HelloCreateElement} from "./components/helloCreateElement";
import {HelloCreateComponent} from "./components/helloCreateComponent";
import HelloPureComponent from "./components/helloPureComponent";
import HelloFunction from "./components/HelloFunction";

const helloMessage = (message) => 'Hello from ' + message

export class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <HelloCreateElement message={helloMessage('createElement')}/>
                <HelloFunction />
                <HelloCreateComponent message={helloMessage('Component')}/>
                <HelloPureComponent message={helloMessage('PureComponent')}/>
            </React.StrictMode>
        )
    }
}