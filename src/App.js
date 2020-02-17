import React, { Component } from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Detail from "./Details.js";
import Home from "./Home.js";
import About from "./About.js";
import NotFound from "./404.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Pokemon</h2>
          <Link to="/">go home</Link>
          <Link to="/about-me/a">about me</Link>
          <Switch>
            <Route exact path="/:name?" component={Home} />
            <Route exact path="/about-me/a" component={About} />
            <Route exact path="/characters/:pokemonId" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
