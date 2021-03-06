import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="todoForm__input"
          type="text"
          value={value}
        //   onChange={(e) => setValue(e.target.value)}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default TodoForm;
