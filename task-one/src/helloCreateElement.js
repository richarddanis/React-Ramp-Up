import React, {Component} from "react";

export class HelloCreateElement extends Component {
    render() {
        return React.createElement('div', null, `${this.props.message}`);
    }
}
