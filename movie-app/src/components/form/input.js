import React from "react";

const Input = props => {
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-stacked-text">
                <span>{props.title}</span>
            </label>
            <div className="uk-form-controls">
                <input className="uk-input"
                    id={props.name}
                    name={props.name}
                    type={props.inputType}
                    defaultValue={props.defaultValue}
                    onChange={(e) => e.target.value}
                    placeholder={props.placeholder}
                    {...props}/>
            </div>
        </div>
    );
};

export default Input;
