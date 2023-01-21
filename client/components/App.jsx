import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Tasks from "./Tasks.jsx";
import TaskForm from "./TaskForm.jsx";
import { tasksState } from "../state.js";
import Search from "./Search.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/joblistings", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        console.log(tasks);// setTasks(tasks);
        setTasks(tasks);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Search tasks={tasks} />
        <TaskForm />
        <Tasks tasks={tasks} />
      </main>
      <Footer />
    </>
  );
};

export default App;
