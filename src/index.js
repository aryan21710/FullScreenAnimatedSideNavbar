import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Approutes from "./router/Approutes.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import CreateSideBarNavLink from '../src/examples/components/CreateSideBarNavLink';

ReactDOM.render(<Approutes />, document.getElementById("root"));

module.exports=CreateSideBarNavLink