import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./components/Login/Login";
import Menu from './components/Menu/Menu';

const App = () => {
  // const [token, setToken] = useState();

  // // if (!token) {
  // //   return <Login setToken={setToken} />;
  // // }

  return (
    <Router>
      <Switch>
        <Route path="/search" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
};

export default App;
