import React from "react";

const Input = props => {
    //console.log(props.value);
    return (
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="form-stacked-text">
                <span>{props.title}</span>
            </label>
            <div className="uk-form-controls">
                <input
                    className="uk-input"
                    id={props.name}
                    name={props.name}
                    type={props.inputType}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                    {...props}/>
            </div>
        </div>
    );
};

export default Input;
