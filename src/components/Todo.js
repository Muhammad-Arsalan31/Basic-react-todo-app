import React from "react";

export const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>

        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};
