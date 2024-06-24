import React, { useState, useEffect } from 'react';
import Profile from "./profile"
import List from "./list"
import TaskList from "./taskForm"
import AddTask from "./addTask"
import FilterTasks from "./filterTask"



function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showTop5, setShowTop5] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd =(Task) => {
    setTasks([...tasks, Task])
  }

  const handleDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {...task, isDone:!task.isDone }
        if (updatedTask.isDone) {
          setCount((prevCount) => prevCount + 1); // Increment count when task is marked as done
        } else {
          setCount((prevCount) => prevCount - 1); // Decrement count when task is marked as undone
        }
        return updatedTask;
      }
      return task;
    })
    setTasks(newTasks);
    if (showTop5) {
      const sortedTasks = [...newTasks].sort((a, b) => a.time.localeCompare(b.time)).slice(0, 5);
      setFilteredTasks(sortedTasks);
    } else {
      setFilteredTasks(newTasks);
    }
  }


  const handleEdit = (id, time) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, time: time }
      }
      return task;
    })
    setTasks(newTasks);
    if (showTop5) {
      const sortedTasks = [...newTasks].sort((a, b) => a.time.localeCompare(b.time)).slice(0, 5);
      setFilteredTasks(sortedTasks);
    } else {
      setFilteredTasks(newTasks);
    }
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id!== id);
    setTasks(newTasks);
    setTasks(newTasks);
    if (showTop5) {
      const sortedTasks = [...newTasks].sort((a, b) => a.time.localeCompare(b.time)).slice(0, 5);
      setFilteredTasks(sortedTasks);
    } else {
      setFilteredTasks(newTasks);
    }
  }

  const handleFilter = (filteredTasks) => {
    setFilteredTasks(filteredTasks);
    setShowTop5(filteredTasks.length === 5);
  }

  return (
    <div>
      <Profile name="Ujjawal kumar singh" age="21" >
      </Profile>
      <List>
      </List>
      <p> Congratulations! you have completed : {count} tasks</p>
      <AddTask onAdd={handleAdd}>
      </AddTask>
      <FilterTasks tasks={tasks} onFilter={handleFilter}>
      </FilterTasks>
      <TaskList
        tasks = {showTop5? filteredTasks :tasks}
        onDone = {handleDone}
        onEdit = {handleEdit}
        onDelete = {handleDelete}
      >
      </TaskList>
    </div>
  )
}

export default App
