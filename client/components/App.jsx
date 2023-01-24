import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Search from "./Search.jsx";
import EmployeeForm from "./EmployeeForm.jsx";

const App = () => {
  // making the state initially to empty array
  const [tasks, setTasks] = useState([]);

  // useeffect is a hook which run immediately as soon as the component loads(in this case App.jsx), which makes an API call to joblistings to get all the jobs to store in tasks state, as soon as the app load.
  useEffect(() => {
    // making a get API call to joblistings endpoint
    fetch("http://localhost:3000/joblistings", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        console.log(tasks);// setTasks(tasks);
        // storing the results in tasks state
        setTasks(tasks);
      });
  }, []);

  return (
    <>
      {/* rendering the components */}
      <Header />
      <main className="main">
        {/* rendering Search component and passing it tasks that we fetched in useEffect as a prop */}
        <Search tasks={tasks} />
        <EmployeeForm/>
      </main>
      <Footer />
    </>
  );
};

export default App;
