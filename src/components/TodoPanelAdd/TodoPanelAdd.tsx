import React from "react";
import styles from "./TodoPanelAdd.module.css";

const DEFAULT_TODO = { id: "", name: "" };

interface AddTodoPanelProps {
  addTodo: ({ name }: Omit<Todo, "id" | "completed">) => void;
}

export const TodoPanelAdd: React.FC<AddTodoPanelProps> = (props) => {
  const [newTask, setNewTask] = React.useState(DEFAULT_TODO);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Если нажат Enter и что-то введено, то добавить задачку в лист
    if (event.currentTarget.value.length > 0 && event.key === "Enter") {
      props.addTodo(newTask);
      setNewTask(DEFAULT_TODO);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <label className={styles.label}>
      <input
        type="text"
        className={styles.input}
        autoComplete="off"
        id="name"
        value={newTask.name}
        onChange={(e) => onChange(e)}
        name="name"
        onKeyDown={(e) => onKeyDown(e)}
        placeholder="What needs to be done?"
        data-testid="input"
      />
    </label>
  );
};
