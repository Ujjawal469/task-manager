import React from 'react';

const FilterTasks = ({ tasks, onFilter }) => {
  const filterTop5 = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.time.localeCompare(b.time)).slice(0, 5);
    onFilter(sortedTasks);
  };

  const showAllTasks = () => {
    onFilter(tasks);
  };

  return (
    <div>
      <button onClick={filterTop5}>Show Top 5 Tasks</button>
      <button onClick={showAllTasks}>Show All Tasks</button>
    </div>
  );
};


export default FilterTasks;
