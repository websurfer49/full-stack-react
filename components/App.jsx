import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Tasks from "./Tasks.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      mode: 'cors',
      method: 'DELETE'
    })
    .then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    })
  }
  
  const editTask = (id, currentValue) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      mode: 'cors',
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: currentValue })
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        const indexOfTaskToUpdate = tasks.findIndex(task => task.id === id);
        const updateTasks = [...tasks];
        updateTasks[indexOfTaskToUpdate] = updatedTask;
        setTasks(updateTasks);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      mode: 'cors'
    }).then((res) => res.json()).then(tasks => {
      setTasks(tasks)
    });
  }, []);
  
  return (
    <>
      <Header />
      <main className="main">
        <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </main>
      <Footer />
    </>
  );
}

export default App;
