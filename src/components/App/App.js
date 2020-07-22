import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../containers/Home/Home";
import Movies from "../../containers/Movies/Movies";
import FilmsItem from "../FilmItem/FilmItem";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" component={FilmsItem} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </>
  );
};

export default App;
