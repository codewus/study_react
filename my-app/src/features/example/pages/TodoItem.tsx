import React, { useState } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  removeTodo: () => void;
  editTodo: (newText: string) => void;
  toggleComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    editTodo(editValue);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleEdit();
              }
            }}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          {todo.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
