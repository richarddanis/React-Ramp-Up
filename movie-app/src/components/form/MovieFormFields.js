import React from "react";
import TextInput from "./components/input";
import Select from "./components/select";
import FormButton from "./components/formButton";
import PropTypes from "prop-types";

function MovieFormFields({ values, handleSubmit, setFieldValue, resetForm }) {
  const newDate = new Date();
  return (
    <div className="uk-margin">
      <form onSubmit={handleSubmit}>
        <h3 className="color-white uk-card-title">{values.title}</h3>
        {/* MOVIE ID */}
        {values.movie.id !== undefined && (
          <TextInput
            name="movie.id"
            label="ID"
            type="number"
            value={values.movie.id}
          />
        )}
        {/* TITLE */}
        <TextInput
          name="movie.title"
          label="TITLE"
          type="text"
          value={values.movie.title || ""}
        />
        {/* RELEASE DATE */}
        <TextInput
          name="movie.release_date"
          label="RELEASE YEAR"
          type="date"
          values={values.movie.release_date || { newDate }}
        />
        {/* URL */}
        <TextInput
          name="movie.poster_path"
          label="MOVIE URL"
          type="text"
          value={values.movie.poster_path || ""}
        />
        {/* GENRE */}
        <Select
          name="movie.genre"
          label="GENRE"
          value={values.movie.genre}
          setFieldValue={setFieldValue}
        />
        {/* OVERVIEW */}
        <TextInput
          name="movie.overview"
          label="OVERVIEW"
          type="text"
          value={values.movie.overview || ""}
        />
        {/* RUNTIME */}
        <TextInput
          name="movie.runtime"
          label="RUNTIME"
          type="number"
          value={values.movie.runtime || ""}
        />
        <div className="uk-button-group uk-margin uk-float-right">
          <FormButton type="reset" name="Reset" onClick={() => resetForm()} />
          <FormButton type="submit" value="submit" name="Submit" />
        </div>
      </form>
    </div>
  );
}

MovieFormFields.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.string,
    movie: PropTypes.shape({
      id: PropTypes.number,
      genre: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      poster_path: PropTypes.string,
      runtime: PropTypes.number,
      overview: PropTypes.string,
    }),
  }),
};

export default MovieFormFields;
