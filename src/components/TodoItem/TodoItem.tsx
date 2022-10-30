import React from "react";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo }) => (
  <div
    style={{
      opacity: todo.completed ? 0.5 : 1,
      textDecoration: todo.completed ? "line-through" : "none",
    }}
    onClick={() => checkTodo(todo.id)}>
    {todo.name}
  </div>
);
