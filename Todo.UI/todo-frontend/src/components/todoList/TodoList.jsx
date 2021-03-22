import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};

export default TodoList;
