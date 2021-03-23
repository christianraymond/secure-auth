import React, { useState, useEffect } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="todo-container">
      <div className="app-wrapper">
        <div className="header">
          <h1>Todo-List</h1>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}
