import React, { useState, useEffect } from 'react';
import RandomQuote from './RandomQuote';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';
import TodoList from './TodoList';
function App(props) {

  const saveditems = JSON.parse(localStorage.getItem('items'));
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    // {
    //   text: 'Learn about React',
    //   isCompleted: false,
    // },
    // {
    //   text: 'Meet friend for lunch',
    //   isCompleted: false,
    // },
    // {
    //   text: 'Build really cool todo app',
    //   isCompleted: false,
    // },
  ]);
  

  const handleChange = (e) => {
    setValue(
      e.target.value
        .toLowerCase()
        .split(' ')
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ')
    );
  };

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

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem('todos'));
    if (newTodos) {
      setTodos(newTodos);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // const updateTodo = (index) => {
  //   const newTodos = [...todos]
  // }

  // const editTodo = (index) => {
  //   setTodos(
  //     todos.map(todo => {
  //       if(todo.index === index){
  //         return {...todo}
  //       };
  //       return todo;
  //     }))
  // }

  return (
    <div className="app">
      <h1 className="title">Todo List 🚀 </h1>
      <RandomQuote />
      <br />
      <TodoForm addTodo={addTodo} />
      <div className="todo__list">
        {todos.map((todo, index) => (
          <Todo
            onChange={handleChange}
            value={value}
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
