import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import FormikLogin from "./components/Login/FormikLogin";
import ToDoList from "./components/ToDo/ToDoList";
import PageToDo from "./components/ToDo/PageToDo";

const App = () => {
  // const [token, setToken] = useState();

  // // if (!token) {
  // //   return <Login setToken={setToken} />;
  // // }

  return (
    <Router>
      <Switch>
        <Route path="/search" component={Home} />
        <Route exact path="/" component={FormikLogin} />
        <Route path="/menu" component={Menu} />
        {/* <Route path="/formiklogin" component={FormikLogin} /> */}

        <Route path="/agregar" component={PageToDo} />
      </Switch>
    </Router>
  );
};

export default App;
