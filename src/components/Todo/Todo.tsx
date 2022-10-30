import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { FILTER } from "../index";
import { TodoPanelAdd } from "../TodoPanelAdd/TodoPanelAdd";
import { v4 as uuid } from "uuid";
import styles from "./Todo.module.css";
import cn from "classnames";

interface TodoProps {
  todoList: Todo[];
}

export const Todo: React.FC<TodoProps> = ({ todoList }) => {
  const [todos, setTodos] = useState(todoList);
  const [filter, setFilter] = useState(FILTER.ALL);
  const [visibleTasks, setVisibleTasks] = useState(todos);

  // Удаленение выполенных задач
  const deleteCompltedTodos = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
    if (filter === FILTER.COMPLETED) {
      setVisibleTasks([]);
    } else setVisibleTasks(todos.filter((todo) => todo.completed !== true));
  };

  // Добавление новой задачи
  const addTodo = ({ name }: Omit<Todo, "id" | "completed">) => {
    const newTask = { id: uuid(), name, completed: false };
    setTodos([...todos, newTask]);
    if (filter !== FILTER.COMPLETED) {
      setVisibleTasks([...visibleTasks, newTask]);
    }
  };

  // Изменение выполненности задачи
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

  // Фильтрация задач по нажатию на фильтр
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
    <>
      <section className={styles.todo} data-testid="todo">
        <div className={styles.todo_row}>
          <TodoPanelAdd addTodo={addTodo} />
        </div>
        <div>
          {visibleTasks.length ? (
            visibleTasks.map((todo) => (
              <div
                key={todo.id}
                className={cn(
                  styles.todo_row,
                  styles.todo_item,
                  todo.completed ? styles.todo_item_completed : ""
                )}
                onClick={() => checkTodo(todo.id)}
                data-testid="task">
                <div
                  className={cn(
                    styles.item_mark,
                    todo.completed ? styles.item_mark_completed : ""
                  )}></div>
                {todo.name}
              </div>
            ))
          ) : (
            <div className={cn(styles.todo_row, styles.todo_empty)}>
              Таких задач нет
            </div>
          )}
        </div>
        <Footer
          current_filter={filter}
          count={countActive}
          filterTodo={filterTodo}
          deleteCompltedTodos={deleteCompltedTodos}
        />
      </section>

      {/* Подложка 
      По хорошему нужно было сделать иначе =)
      Во имя быстроты сделано так */}
      <section className={cn(styles.todo, styles.todo_base)}></section>
      <section className={cn(styles.todo, styles.todo_base)}></section>
    </>
  );
};
