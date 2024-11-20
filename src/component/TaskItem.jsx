// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onEdit, onToggleCompletion }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => onToggleCompletion(task.id)}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
