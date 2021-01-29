import React from 'react'

const Todo = ({todo, index, completeTodo, removeTodo}) => {
    return (
        <div className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
            {todo.text}
            
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
     
        </div>
    )
}

export default Todo
