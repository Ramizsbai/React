import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";
import "./components/css/Index.css";


ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))

ReactDOM.render(
  <HelloWorld/>
, document.getElementById("root"))