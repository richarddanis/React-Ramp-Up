import React from "react";

function HandlerButton({eventName, name, movieId}) {
    return (
        <button
            onClick={(event) => {
            eventName(event, movieId)
        }}
            className="uk-button"
            style={{
            backgroundColor: 'transparent'
        }}>
            {name}
        </button>
    );
}

export default HandlerButton