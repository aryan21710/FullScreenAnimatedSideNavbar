import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Product } from "../components/Product";
import { Portfolio } from "../components/Portfolio";
import { Catelogue } from "../components/Catelogue";
import { Contactus } from "../components/Contactus";

import { Catelogue1 } from "../components/Catelogue1";
import { Catelogue2 } from "../components/Catelogue2";

import { Product1 } from "../components/Product1";
import { Product2 } from "../components/Product2";
import { Product3 } from "../components/Product3";
import { Product4 } from "../components/Product4";

import { Portfolio1 } from "../components/Portfolio1";

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
