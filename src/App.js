import React, { useState } from 'react';
import RandomQuote from './RandomQuote';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <RandomQuote />
      <br />
      <TodoForm addTodo={addTodo} />
      <div className="todo__list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
