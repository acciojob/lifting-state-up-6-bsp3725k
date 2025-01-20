import React, { useState } from "react"; // Added useState to imports
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Master JavaScript', completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
           <h2>Child Component</h2>
        <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
