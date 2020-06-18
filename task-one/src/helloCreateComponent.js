import React, {Component} from "react";

export class HelloCreateComponent extends Component{
    render() {
        return <div>{this.props.message}</div>
    }
}
