import React from 'react';
import { useFetchTasksQuery } from '../api/tasksApi';
import TaskItem from './TaskItem';
import InfiniteScroll from './InfiniteScroll';

const TaskList: React.FC = () => {
  const { data: tasks, isLoading, fetchMore } = useFetchTasksQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <InfiniteScroll loadMore={fetchMore}>
      <div>
        {tasks?.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default TaskList;
