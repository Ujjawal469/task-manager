import React, { useState } from 'react';
const TaskList = ({ tasks, onDone, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [newTime, setNewTime] = useState('');

  const handleEditClick = (task) => {
    setEditingId(task.id);
    setNewTime(task.time);
  };

  const handleSaveClick = (id) => {
    onEdit(id, newTime);
    setEditingId(null);
    setNewTime('');
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              {task.title} - 
              {editingId === task.id ? (
                <input 
                  type="time" 
                  value={newTime} 
                  onChange={(e) => setNewTime(e.target.value)} 
                />
              ) : (
                task.time
              )}
            </p>
            <button onClick={() => onDone(task.id)}>
              {task.isDone ? 'Undone' : 'Done'}
            </button>
            {editingId === task.id ? (
              <button onClick={() => handleSaveClick(task.id)}>Save</button>
            ) : (
              <button onClick={() => handleEditClick(task)}>Edit</button>
            )}
            <button onClick={() => onDelete(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
