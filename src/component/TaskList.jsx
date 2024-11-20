// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onEdit, onToggleCompletion }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
