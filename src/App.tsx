import './App.css';
import { ChangeEvent, useState } from 'react';
import ITodo from './Interfaces/Todo.interface';
import { ArrowFunction } from 'typescript';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    if (name === 'task') {
      setTask(value);
    }
    if (name === 'deadline') {
      setDeadline(Number(value));
    }
  };

  const addTask = (): void => {
    const newTask = { task, deadline };
    if (task === '' || deadline <= 0) { return; }

    setTodos([...todos, newTask]);

    setTask("");
    setDeadline(0);
  };

  return(
    <div className='app-container'>
      <h2 className='app-title'>TypeScript Todo App</h2>

      <div className='header'>
        <div className='input-container'>
          <input type="text" name='task' placeholder='Task...' onChange={handleChange} value={task} />
          <input type="number" name='deadline' placeholder='Deadline (Days)' onChange={handleChange} value={deadline} />
          <button className='submit-button' onClick={addTask}>Add Task</button>
        </div>
      </div>

      <div className='todoList'>
        <pre>{JSON.stringify(todos, undefined, 2)}</pre>
      </div>
    </div>
  )
}

export default App;
