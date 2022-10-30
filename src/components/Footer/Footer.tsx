import React from "react";
import { FILTER } from "../index";
import styles from "./Footer.module.css";

interface FooterProps {
  count: number;
  filterTodo: (filter: string) => void;
  deleteCompltedTodos: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  count,
  filterTodo,
  deleteCompltedTodos,
}) => (
  <section>
    <h1>{count} items left</h1>
    <div>
      <span onClick={() => filterTodo(FILTER.ALL)}>All</span>
      <span onClick={() => filterTodo(FILTER.ACTIVE)}>Active</span>
      <span onClick={() => filterTodo(FILTER.COMPLETED)}>Completed</span>
    </div>
    <span onClick={() => deleteCompltedTodos()}>Clear Completed</span>
  </section>
);
