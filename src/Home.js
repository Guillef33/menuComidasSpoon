import React, { Component } from "react";
import "./App.css";

// import Form from "./components/Form";
import Fetch from "./components/Search/Fetch";
import Menu from './components/Menu/Menu';

class Home extends Component {
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&number=12&query=${recipeName}`
    );
    const data = await response.json();
    console.log(data.results);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Fetch />

      </div>
    );
  }
}

export default Home;
