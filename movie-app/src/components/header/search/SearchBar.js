import React, { useEffect, useCallback } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as actionType from "../../../store/actions/actions";
import { useHistory, useParams } from "react-router";

const Searchbar = () => {
  const dispatch = useDispatch();
  const { queryParam } = useParams();
  const history = useHistory();

  const handleMovieSearch = useCallback(
    (queryParam) => {
      const inputValue = queryParam;
      dispatch(actionType.searchMovie(inputValue));
      const resourceValue =
        inputValue === ("" || undefined) ? "/" : "/search/" + inputValue;
      history.push(resourceValue);
    },
    [dispatch, history]
  );

  useEffect(() => {
    handleMovieSearch(queryParam);
  }, [queryParam, handleMovieSearch]);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      handleMovieSearch(values.search);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top uk-padding-large uk-padding-remove-top"
        data-uk-grid
      >
        <div className="uk-padding-small">
          <input
            className="uk-input uk-form-width-large uk-float-right uk-border-rounded"
            type="text"
            name="search"
            onChange={formik.handleChange}
            placeholder="Find your movie!"
          />
        </div>
        <div className="uk-padding-small">
          <button
            type="submit"
            className="uk-button uk-float-left uk-border-rounded"
            style={{
              backgroundColor: "#F65261",
            }}
          >
            <span className="color-white">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
