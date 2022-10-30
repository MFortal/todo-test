import { Todo } from "./components";
import styles from "./App.module.css";

const DEFAULT_TODO_LIST = [
  {
    id: "dc724d29-c713-4428-8e32-aef5d78fcbe8",
    name: "task 1",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190664",
    name: "task 2",
    completed: false,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190665",
    name: "task 3",
    completed: true,
  },
  {
    id: "c7344c3a-8f77-4e1b-b078-512494190666",
    name: "task 3",
    completed: false,
  },
];

export const App = () => {
  return (
    <div>
      <div>
        <h5>todos</h5>
        <Todo todoList={DEFAULT_TODO_LIST} />
      </div>
    </div>
  );
};
export default App;
