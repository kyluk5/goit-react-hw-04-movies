import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../containers/Home/Home";
import Movies from "../../containers/Movies/Movies";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
