import React from "react";

const Select = props => {
    return (
        <div className="uk-margin">
            <label htmlFor={props.name}>
                <span>{props.title}</span>
            </label>
            <div style={{backgroundColor: 'white'}}>
                    <select className="uk-select">
                        <option value="" disabled>Please select...</option>
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