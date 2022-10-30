import React from 'react';
import styles from './TodoPanelAdd.module.css';

const DEFAULT_TODO = { id:'', name: '' };

interface AddTodoPanelProps {
  addTodo: ({ name }: Omit<Todo, 'id' | 'completed'>) => void;
}

export const TodoPanelAdd: React.FC<AddTodoPanelProps> = (props) => {
const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onClick = () => {
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

    const something=(event: React.KeyboardEvent<HTMLDivElement>)=> {
        if (event.keyCode === 13) {
            onClick();
        }
    }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor='name'>
            <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' onKeyDown={(e) => something(e) }/>
          </label>
        </div>
      </div>
    </div>
  );
};
