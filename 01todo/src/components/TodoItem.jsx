import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, removeTodo, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleUpdate = () => {
        updateTodo(todo.id, newTitle);
        setIsEditing(false);
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} 
                    />
                    <button onClick={handleUpdate}>Update</button>
                </>
            ) : (
                <>
                    <span onClick={() => toggleComplete(todo.id)}>
                        {todo.title}
                    </span>
                    <button className='edit' onClick={handleEdit} disabled={todo.completed ? true : false}>Edit</button>
                    <button id='delete' onClick={() => removeTodo(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
