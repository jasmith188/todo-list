import React from 'react';

const Item = ({ list, onToggleComplete }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.isComplete ? 'line-through' : 'none',
              }}
            >
              {item.task}
            </span>
            <button type="button" onClick={() => onToggleComplete(item.id)}>
              {item.isComplete ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
