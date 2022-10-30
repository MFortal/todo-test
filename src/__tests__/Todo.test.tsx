import { render, screen, fireEvent } from "@testing-library/react";
import { Todo } from "../components";
import styleTodo from "../components/Todo/Todo.module.css";

const TASKS = [
  {
    id: "dc724d29-c713-4428-8e32-aef5d78fcbe8",
    name: "Выполнить тестовое задание",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190664",
    name: "Причесать код",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190665",
    name: "Покрыть тестами",
    completed: true,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190666",
    name: "Погладить кота",
    completed: false,
  },
];

describe("Проверка работоспособности приложения", () => {
  it("Отрисовались все 4 задачи", () => {
    render(<Todo todoList={TASKS} />);
    const tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(4);
  });

  it("Проверка фильтрации", () => {
    render(<Todo todoList={TASKS} />);

    // Нажатие на All
    const filterAll = screen.getByTestId("all");
    fireEvent.click(filterAll);
    let tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(4);

    // Нажатие на Active
    const filterActive = screen.getByTestId("active");
    fireEvent.click(filterActive);
    tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(3);

    // Нажатие на Completed
    const filterCompleted = screen.getByTestId("completed");
    fireEvent.click(filterCompleted);
    tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(1);

    // Снова на All
    fireEvent.click(filterAll);
    tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(4);
  });

  it("Проверка изменения выполненности задачи", () => {
    render(<Todo todoList={TASKS} />);
    const tasks = screen.getAllByTestId("task");
    const firstTask = tasks[0];
    // Задача не выполнена
    expect(firstTask).not.toHaveClass(styleTodo.todo_item_completed);
    // А сейчас будет выполнена
    fireEvent.click(firstTask);
    expect(firstTask).toHaveClass(styleTodo.todo_item_completed);
  });

  it("Проверка изменения количества не выполненных задач", () => {
    render(<Todo todoList={TASKS} />);
    const tasks = screen.getAllByTestId("task");
    const firstTask = tasks[0];
    const countActive = screen.getByTestId("countActive");

    expect(countActive).toHaveTextContent(/3/i);
    fireEvent.click(firstTask);
    expect(countActive).toHaveTextContent(/2/i);
  });

  it("Удаление выполненных задач", () => {
    render(<Todo todoList={TASKS} />);
    let tasks = screen.getAllByTestId("task");
    const clear = screen.getByTestId("clear");
    expect(tasks).toHaveLength(4);
    fireEvent.click(clear);
    tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(3);
  });

  it("Добавление новой задачи", () => {
    render(<Todo todoList={TASKS} />);
    let tasks = screen.getAllByTestId("task");
    const input = screen.getByTestId("input");

    // Сначала задач 4
    expect(tasks).toHaveLength(4);

    // Добавление новой задачи в инпут
    fireEvent.change(input, { target: { value: "hello world" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });

    // Теперь задач 5 и новая задача есть в списке
    tasks = screen.getAllByTestId("task");
    expect(tasks).toHaveLength(5);
    expect(tasks.map((t) => t.textContent)).toContain("hello world");
  });
});
