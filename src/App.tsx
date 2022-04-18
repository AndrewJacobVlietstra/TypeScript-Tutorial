import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([{}]);

  const [formData, setFormData] = useState({
    title: "",
    note: "",
    time: 0,
    completed: false,
  });

  const handleFormDataChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    return setFormData({ ...formData, [id] : value });
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // return setTodos(...todos, {...formData, id: Math.random()});
  }

  return (
    <div className="App">
      <h1>TypeScript React Todo List</h1>
      <pre>{JSON.stringify(todos)}</pre>
      
      <form className='app-form' onSubmit={handleFormSubmit}>
        <label>Todo Title:</label>
        <input name='title' id='title' type='text' placeholder='Title' value={formData.title} onChange={handleFormDataChange} />
        <label>Todo Note:</label>
        <input name='note' id='note' type='text' placeholder='Note' value={formData.note} onChange={handleFormDataChange} />
        <label>Todo Time (Days):</label>
        <input name='time' id='time' type='number' value={formData.time} onChange={handleFormDataChange} />
        <button className='form-button' formAction='submit'>Submit Todo</button>
      </form>
    </div>
  );
}

export default App;
