import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Проверка страницы", () => {
  it("Заголовок присутсвует на странице", () => {
    render(<App />);
    const linkElement = screen.getByText(/todos/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("Todo присутсвует на странице", () => {
    render(<App />);
    const todo = screen.getByTestId("todo");
    expect(todo).toBeInTheDocument();
  });
});
