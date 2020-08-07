import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieForm from "../components/form/MovieForm";
import MovieSection from "../components/main/movie/MovieSection";
import "../style/index.css";
import MovieDetails from "./../components/header/details/MovieDetails";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="uk-container-expand">
        <Switch>
          <Switch>
            <Route exact path={["", "/", "/search", "/search/:queryParam"]}>
              <Header />
            </Route>
            <Route exact path="/film/:id">
              <MovieDetails />
            </Route>
            <Redirect to="/not-found" />
          </Switch>
        </Switch>
        <MovieForm />
        <MovieSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
