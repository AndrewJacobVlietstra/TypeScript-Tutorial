import './App.css';
import { ChangeEvent, useState } from 'react';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todos, setTodos] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'task') {
      setTask(value);
    }
    if (name === 'deadline') {
      setDeadline(Number(value));
    }
  };

  return(
    <div className='app-container'>
      <h2 className='app-title'>TypeScript Todo App</h2>

      <div className='header'>
        <div className='input-container'>
          <input type="text" name='task' placeholder='Task...' onChange={handleChange} />
          <input type="number" name='deadline' placeholder='Deadline (Days)' onChange={handleChange} />
          <button className='submit-button'>Add Task</button>
        </div>
      </div>

      <div className='todoList'></div>
    </div>
  )
}

export default App;
