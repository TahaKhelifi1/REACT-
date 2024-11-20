// components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, onEditTask, initialTask = null }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (initialTask) {
      setTaskName(initialTask.name);
      setTaskDescription(initialTask.description);
      setIsEditing(true);
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Please fill in both fields');
      return;
    }

    const task = {
      id: isEditing ? initialTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    if (isEditing) {
      onEditTask(task);
    } else {
      onAddTask(task);
    }

    setTaskName('');
    setTaskDescription('');
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
