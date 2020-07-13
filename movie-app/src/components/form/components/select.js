import React from "react";
import { Field } from 'formik';


const Select = props => {
    return (
        <div className="uk-margin">
            <div className="uk-margin-small">
                <label htmlFor={props.label}>
                    <span>{props.label}</span>
                </label>
            </div>
            <div className="uk-border-rounded">
                    <Field as="select" className="uk-select uk-border-rounded" name="movie.select">
                        <option value="" data-disabled>Select genre...</option>
                        {props
                            .options
                            .map(option => {
                                return <option key={option} value={option} label={option}>{option}</option>
                            })}
                    </Field>
            </div>
        </div>
        )
    };

export default Select;