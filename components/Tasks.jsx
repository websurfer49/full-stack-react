import React from "react";
import Task from "./Task.jsx";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  return tasks.map(task => (
    <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
  ));
};

export default Tasks;
