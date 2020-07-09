import React from "react";
import TextInput from "./components/input";
import FormButton from "./components/formButton";

function MovieFormFields({values, handleChange, handleSubmit, handleBlur, title}) {
    return ( 
            <div className="uk-margin">
                <form onSubmit={handleSubmit}>
                    <h3
                        style={{
                        color: 'white'
                    }}
                        className="uk-card-title">{title}</h3>
                    {/* TITLE */}
                    <TextInput
                        name="movie.title"
                        label="TITLE"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={values.movie.title  || ""}/> {/* RELEASE DATE */}
                    {/* URL */}
                    <TextInput
                        name="movie.poster_path"
                        label="MOVIE URL"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={values.movie.poster_path  || ""}/> {/* GENRE */}
                    {/* OVERVIEW */}
                    <TextInput
                        name="movie.overview"
                        label="OVERVIEW"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={values.movie.overview  || ""}/> {/* RUNTIME */}
                    <TextInput
                        name="movie.runtime"
                        label="RUNTIME"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="number"
                        value={values.movie.runtime || ""}/>
                    <div className="uk-button-group uk-margin uk-float-right">
                        <FormButton type="reset" name="Reset"/>
                        <FormButton type="submit" value="submit" name="Submit"/>
                    </div>
                </form>
                <div className="uk-position-center-right-out">
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </div>
            </div>
    )
}

export default MovieFormFields;