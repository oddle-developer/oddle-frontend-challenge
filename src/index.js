import { Provider } from "react-redux";
import store from "./store";
import "./style.scss";
import App from "./components/App";
import React from "react";
import { render } from "react-dom";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
