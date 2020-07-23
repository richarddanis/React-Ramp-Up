import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as actionType from "../../../store/actions/actions";
import { useHistory } from "react-router";

const Searchbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const inputValue = values.search;
      dispatch(actionType.searchMovie(inputValue));
      const resourceValue = inputValue === "" ? "/" : "/search/" + inputValue;
      history.push(resourceValue);
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
            initialValues={formik.values.search}
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
