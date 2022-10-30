import { Todo } from "./components";
import styles from "./App.module.css";
import { DEFAULT_TASKS } from "./components";

export const App = () => {
  return (
    <main className={styles.main}>
      <h5 className={styles.heading}>todos</h5>
      <Todo todoList={DEFAULT_TASKS} />
    </main>
  );
};
export default App;
