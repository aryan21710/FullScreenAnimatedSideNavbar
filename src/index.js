import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Approutes from "./router/Approutes.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./styles/createsidebarnavlink.css";
import App from "./App";
import { About } from "./components/About/About";

ReactDOM.render(<Approutes />, document.getElementById("root"));
