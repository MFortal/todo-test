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
    <span className={styles.footer_span} data-testid="countActive">
      {count} items left
    </span>
    <div className={styles.footer_filter}>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.ALL ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.ALL)}
        data-testid="all">
        All
      </span>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.ACTIVE ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.ACTIVE)}
        data-testid="active">
        Active
      </span>
      <span
        className={cn(
          styles.footer_span,
          current_filter === FILTER.COMPLETED ? styles.footer_currentFilter : ""
        )}
        onClick={() => filterTodo(FILTER.COMPLETED)}
        data-testid="completed">
        Completed
      </span>
    </div>
    <span
      className={styles.footer_span}
      onClick={() => deleteCompltedTodos()}
      data-testid="clear">
      Clear Completed
    </span>
  </div>
);
