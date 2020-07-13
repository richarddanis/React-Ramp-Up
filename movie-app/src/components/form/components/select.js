import React from "react";
import {Field} from "formik";
import {genres} from "../../util/genres";

const Select = props => {
    return (
        <div className="uk-margin">
            <div className="uk-margin-small">
                <label htmlFor={props.label}>
                    <span>{props.label}</span>
                </label>
            </div>
            <div className="uk-border-rounded">
                <Field as="select" name="movie.genres" className="uk-select uk-border-rounded"
                    onChange={e => props.setFieldValue("movie.genres", [].slice.call(e.target.selectedOptions).map(option => option.value))} multiple={true}>
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.value}>
                            {genre.title}
                        </option>
                    ))}
                </Field>
            </div>
        </div>
    )
};

export default Select;