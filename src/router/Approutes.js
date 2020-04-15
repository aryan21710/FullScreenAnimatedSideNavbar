import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../examples/components/Home";
import { About } from "../examples/components/About";
import { Product } from "../examples/components/Product";
import { Portfolio } from "../examples/components/Portfolio";
import { Catelogue } from "../examples/components/Catelogue";
import { Contactus } from "../examples/components/Contactus";

import { Catelogue1 } from "../examples/components/Catelogue1";
import { Catelogue2 } from "../examples/components/Catelogue2";

import { Product1 } from "../examples/components/Product1";
import { Product2 } from "../examples/components/Product2";
import { Product3 } from "../examples/components/Product3";
import { Product4 } from "../examples/components/Product4";

import { Portfolio1 } from "../examples/components/Portfolio1";

import App from "../App";

class DebugRouter extends BrowserRouter {
  constructor(props) {
    super(props);
    console.log("initial history is: ", JSON.stringify(this.history, null, 2));
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(
        `The last navigation action was ${action} with state as ${location.state}`,
        JSON.stringify(this.history, null, 2)
      );
    });
  }
}

class Approutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <App />
          <Switch>
            <Route exact={true} strict path="/">
              <Home />
            </Route>
            <Route exact={true} strict path="/products">
              <Product />
            </Route>
            <Route exact={true} strict path="/about">
              <About />
            </Route>
            <Route exact={true} strict path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact={true} strict path="/catelogue">
              <Catelogue />
            </Route>
            <Route exact={true} strict path="/contactus">
              <Contactus />
            </Route>
            <Route exact={true} strict path="/catelogue/catelogue1">
              <Catelogue1 />
            </Route>{" "}
            <Route exact={true} strict path="/catelogue/catelogue2">
              <Catelogue2 />
            </Route>
            <Route exact={true} strict path="/products/product1">
              <Product1 />
            </Route>
            <Route exact={true} strict path="/products/product2">
              <Product2 />
            </Route>
            <Route exact={true} strict path="/products/product3">
              <Product3 />
            </Route>
            <Route exact={true} strict path="/products/product4">
              <Product4 />
            </Route>
            <Route exact={true} strict path="/portfolio/portfolio1">
              <Portfolio1 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Approutes;
