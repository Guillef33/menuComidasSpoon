import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import FormToDoList from "./FormToDoList";
import ToDoList from "./ToDoList";
//CSS
import "./todolist.css";

import Fetch from '../Search/Fetch'

function PageToDo() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const menuList = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&diet=vegetarian&includeIngredients=tomato&number=4&`
    );
    console.log(response);
    const data = await response.json();
    console.log(data.results);
    setTodos(data.results);
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Get Local ToDos
  useEffect(() => {
    menuList();
  }, []);

  // use Effect
  useEffect(() => {
    // console.log("Any");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <header>
        <h1>Agregar items a esta lista</h1>
      </header>
      <FormToDoList
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <Fetch />
    </>
  );
}

export default PageToDo;
