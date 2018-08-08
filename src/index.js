import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { TrasactionDetails } from "./components/transactionHistory";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
    <Route path="transactiondetail/:data" component={TrasactionDetails} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
