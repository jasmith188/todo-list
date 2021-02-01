import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  return (
    <div className="card">
      <div
        className="todo"
        style={{
          textDecoration: todo.isCompleted ? 'line-through' : '',
          textDecorationColor: todo.isCompleted ? 'red' : '',
          color: todo.isCompleted ? 'green' : '',
        }}
      >
        {todo.text}

        <button
          className="todo__button todo__button__complete "
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="todo__button todo__button__delete"
          onClick={() => removeTodo(index)}
        >
          💩
        </button>
        <button className="todo__button" onClick={() => editTodo(index)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
