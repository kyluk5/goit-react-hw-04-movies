import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const Home = lazy(() =>
  import("../../containers/Home/Home" /* webpackChunkName: "home" */)
);
const Movies = lazy(() =>
  import("../../containers/Movies/Movies" /* webpackChunkName: "Movies" */)
);
const FilmItem = lazy(() =>
  import("../FilmItem/FilmItem" /* webpackChunkName: "FilmItem" */)
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" component={FilmItem} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
