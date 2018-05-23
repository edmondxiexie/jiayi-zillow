import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import "../styles/main.scss";

const App = () => {
  return (
    <Routes />
    );
};

ReactDOM.render(<App />, document.getElementById("root"));