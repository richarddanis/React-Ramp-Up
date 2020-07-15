import React from "react";
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({label, ...props}) => {
    const [field, meta]= useField(props);

    return (
        <>
            <div className="uk-margin">
                <div className="uk-margin-small">
                    <label className="uk-form-label" htmlFor="form-stacked-text">
                        <span>{label}</span>
                    </label>
                </div>
                <div className="uk-form-controls">
                    <input className="uk-input uk-border-rounded" {...field} {...props}/>
                </div>
                {meta.touched && meta.error ? (
                    <div>{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

TextInput.propTypes = {
    label: PropTypes.string
};

export default TextInput;
