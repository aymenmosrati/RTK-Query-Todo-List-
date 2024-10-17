import React from 'react';
import { Task } from '../features/tasks/tasksTypes';
import { useDeleteTaskMutation } from '../api/tasksApi';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <div className="task-item">
      <p>{task.name}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default TaskItem;
