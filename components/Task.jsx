import React, { useState } from "react";

const Task = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    editTask(task.id, currentValue);
  }

  return (
    <div className="task">
      {isEditing
        ? (
          <form onSubmit={handleSubmit}>
            <input value={currentValue} onChange={e => setCurrentValue(e.target.value)} />
          </form>
        )
        : <span onClick={() => setIsEditing(true)}>{task.description}</span>
      }
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};

export default Task;
