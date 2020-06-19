import React, {PureComponent} from "react";

//Stateful
export default class HelloPureComponent extends PureComponent {
    render() {
        return <div>{this.props.message}</div>
    }
}
