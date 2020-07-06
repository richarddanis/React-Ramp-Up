import React from "react";

const HandlerButton = props => {
    return (
        <button
            onClick={(event) => {
            props.eventName(event, props.movieId)
        }}
            className="uk-button"
            style={{
            backgroundColor: 'transparent'
        }}>
            {props.name}
        </button>
    );
}

export default HandlerButton;