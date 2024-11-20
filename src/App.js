// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Edit an existing task
  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete a task with confirmation
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  // Mark a task as completed
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
