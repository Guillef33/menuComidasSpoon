import React from "react";
import "../App.css";

// import Form from "./components/Form";
import Fetch from "../components/Search/Fetch";
import Menu from "../components/Menu/Menu";
import PageToDo from "../components/ToDo/PageToDo";
import MyProvider from "../context/provider";

const Home = () => {
  return (
    <MyProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bienvenido al restaurante.</h1>
          <p>Ahora podes hacer tu menu.</p>
        </header>
        <Fetch />
        <PageToDo />
      </div>
    </MyProvider>
  );
};

export default Home;
