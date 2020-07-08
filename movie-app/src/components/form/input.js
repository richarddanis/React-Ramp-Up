import React from "react";
import { useField } from 'formik';

const TextInput = ({label, ...props}) => {
    const [field, meta, helpers]= useField(props);

    return (
        <>
            <div className="uk-margin">
                <div className="uk-margin-small">
                    <label className="uk-form-label" htmlFor="form-stacked-text">
                        <span>{label}</span>
                    </label>
                </div>
                <div className="uk-form-controls">
                    <input className="uk-input uk-border-rounded"/>
                </div>
            </div>
        </>
    );
};

export default TextInput;
