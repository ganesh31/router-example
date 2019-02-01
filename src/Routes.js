import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/products" component={Products} />
    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
