import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const TodoItem = ({ text }) => {
    return <li>{text}</li>;
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]); // Add the new todo to the list
      setNewTodo(''); // Clear the input field
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='todo-input'
          autoComplete='off'
          type='text'
          name='newTodo'
          placeholder='What needs to be done?'
          value={newTodo} // Bind input value to state
          onChange={handleChange}
        />
        <input type='submit' className='save-button' value='SAVE' />
      </form>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
