import React from "react";
import TextInput from "./components/input";
import Select from "./components/select";
import FormButton from "./components/formButton";

function MovieFormFields({values, handleSubmit}) {
    return ( 
            <div className="uk-margin">
                <form onSubmit={handleSubmit}>
                    <h3 className="color-white uk-card-title">{values.title}</h3>
                {/* MOVIE ID */}
                    {values.movie.id !== undefined &&
                    <TextInput
                        name="movie.id"
                        label="ID"
                        type="text"
                        value={values.movie.id}
                    />}
                {/* TITLE */}
                    <TextInput
                        name="movie.title"
                        label="TITLE"
                        type="text"
                        value={values.movie.title  || ""}
                    /> 
                {/* RELEASE DATE */}
                    <TextInput
                        name="movie.release_date"
                        label="RELEASE YEAR"
                        type="date"
                        values={values.movie.release_date || ""}
                    />
                {/* URL */}
                    <TextInput
                        name="movie.poster_path"
                        label="MOVIE URL"
                        type="text"
                        value={values.movie.poster_path  || ""}
                    /> 
                {/* GENRE */}
                    <Select
                        name="movie.genre"
                        label="GENRE"
                        options={values.genreOptions}
                        value={values.movie.genre} 
                    />
                {/* OVERVIEW */}
                    <TextInput
                        name="movie.overview"
                        label="OVERVIEW"
                        type="text"
                        value={values.movie.overview  || ""}
                    /> 
                {/* RUNTIME */}
                    <TextInput
                        name="movie.runtime"
                        label="RUNTIME"
                        type="number"
                        value={values.movie.runtime || ""}
                    />
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