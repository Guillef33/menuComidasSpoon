import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, inputText, filteredTodos }) => {
  // const [todos, setTodos] = useState([]);

  //  console.log(filteredTodos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.title}
            image={todo.image}
            // inputText={inputText}
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
