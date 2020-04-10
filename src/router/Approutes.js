import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Product } from "../components/Product/Product";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Catelogue } from "../components/Catelogue/Catelogue";
import { Product1 } from "../components/Product/Product1";
import { Product2 } from "../components/Product/Product2";
import { Portfolio1 } from "../components/Portfolio/Portfolio1";
import App from '../App'

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
      <App/>
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
        <Route exact={true} strict path="/products/product1">
          <Product1 />
        </Route>

        <Route exact={true} strict path="/products/product2">
          <Product2 />
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
