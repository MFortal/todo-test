import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { FILTER } from "../index";
import { TodoPanelAdd } from "../TodoPanelAdd/TodoPanelAdd";
import { TodoItem } from "../TodoItem/TodoItem";
import { v4 as uuid } from "uuid";

interface TodoProps {
  todoList: Todo[];
}

export const Todo: React.FC<TodoProps> = ({ todoList }) => {
  const [todos, setTodos] = useState(todoList);
  const [filter, setFilter] = useState(FILTER.ALL);
  const [visibleTasks, setVisibleTasks] = useState(todos);

  const deleteCompltedTodos = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
    setVisibleTasks(todos.filter((todo) => todo.completed !== true));
  };

  const addTodo = ({ name }: Omit<Todo, "id" | "completed">) => {
    const newTask = { id: uuid(), name, completed: false };
    setTodos([...todos, newTask]);
    if (filter !== FILTER.COMPLETED) {
      setVisibleTasks([...visibleTasks, newTask]);
    }
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
    setVisibleTasks(
      visibleTasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const filterTodo = (filter: string): void => {
    setFilter(filter);
    switch (filter) {
      case FILTER.COMPLETED:
        setVisibleTasks(todos.filter((todo) => todo.completed === true));
        break;
      case FILTER.ACTIVE:
        setVisibleTasks(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setVisibleTasks(todos);
        break;
    }
  };

  const countActive = todos.filter((todo) => todo.completed !== true).length;

  return (
    <div>
      <TodoPanelAdd addTodo={addTodo} />
      {visibleTasks.map((todo) => (
        <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} />
      ))}
      <Footer
        count={countActive}
        filterTodo={filterTodo}
        deleteCompltedTodos={deleteCompltedTodos}
      />
    </div>
  );
};
