import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker"; 
// import Autocomplete from "./components/new";
// import Search from "./components/new.js";
import App from "./App.js"






ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
