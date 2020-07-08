import React from "react";

const Select = props => {
    return (
        <div className="uk-margin">
            <div className="uk-margin-small">
                <label  htmlFor={props.name}>
                    <span>{props.title}</span>
                </label>
            </div>
            <div className="uk-border-rounded">
                    <select className="uk-select uk-border-rounded" name="select">
                        <option value="" data-disabled>Select genre...</option>
                        {props
                            .options
                            .map(option => {
                                return <option key={option} value={option} label={option}>{option}</option>
                            })}
                    </select>
            </div>
        </div>
        )
    };

export default Select;