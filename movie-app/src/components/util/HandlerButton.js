import React from "react";

const HandlerButton = props => {
    return (
        <button
            onClick={(event) => {
            props.eventName(event)
        }}
            className="uk-button"
            style={{
            backgroundColor: 'transparent'
        }}>
            {props.children}
        </button>
    );
}

export default HandlerButton;