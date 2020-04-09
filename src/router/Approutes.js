import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Product } from "../components/Product/Product";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { Catelogue } from "../components/Catelogue/Catelogue";
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

export class Approutes extends Component {
  render() {
    return (
      <DebugRouter>
        <div>
          <Switch>
            <Route exact={true}
              strict path="/">
              <Home />
            </Route>
            <Route exact={true}
              strict path="/products">
              <Product />
            </Route>
            <Route exact={true}
              strict path="/sidebar" component={(props) => <App />} />

            <Route exact={true}
              strict path="/about">
              <About />
            </Route>
            <Route exact={true}
              strict path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact={true}
              strict path="/catelogue">
              <Catelogue />
            </Route>
          </Switch>
        </div>
      </DebugRouter>
    );
  }
}

export default Approutes;
