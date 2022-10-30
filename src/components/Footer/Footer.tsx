import React from "react";
import { FILTER } from "../index";
import styles from "./Footer.module.css";
import cn from "classnames";

interface FooterProps {
  count: number;
  filterTodo: (filter: string) => void;
  deleteCompltedTodos: () => void;
  current_filter: string;
}

export const Footer: React.FC<FooterProps> = ({
  count,
  filterTodo,
  deleteCompltedTodos,
  current_filter,
}) => (
  <div className={styles.footer}>
    <span className={styles.footer_span}>{count} items left</span>
    <div className={styles.footer_filter}>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.ALL ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.ALL)}>
        All
      </span>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.ACTIVE ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.ACTIVE)}>
        Active
      </span>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.COMPLETED ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.COMPLETED)}>
        Completed
      </span>
    </div>
    <span className={styles.footer_span} onClick={() => deleteCompltedTodos()}>
      Clear Completed
    </span>
  </div>
);
