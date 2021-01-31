import React, { useState } from 'react';
import RandomQuote from './RandomQuote';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css'
function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    const newTodos = [...todos]
  }

  // const updateTodo = (todoId, newValue) => {
  //   if (!newValue.todo || /^\s*$/.test(newValue.todo)) {
  //     return;
  //   }

  //   setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  // };

  return (
    <div className="app">
      <h1 className='title' >Todo List 🚀  </h1>
      <RandomQuote />
      <br />
      <TodoForm addTodo={addTodo} />
      <div className="todo__list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
