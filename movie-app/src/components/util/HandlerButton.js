import React from "react";

const HandlerButton = (props) => {
  return (
    <button
      onClick={() => {
        props.eventName();
      }}
      className="uk-button background-transparent"
    >
      {props.children}
    </button>
  );
};

export default HandlerButton;
