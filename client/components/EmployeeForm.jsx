import React, { useState } from "react";

const EmployeeForm = () => {
    const [addedData, setAddedData] = useState({
        title: '',
        salary: '',
        location: ''
    })
    const handleChange = (e) => {
        setAddedData({...addedData, [e.target.name]: e.target.value });
      
    }
    const handlesubmit = (e) => {
        e.preventDefault();

          fetch('http://localhost:3000/joblistings', {
            method: 'POST',
            body: JSON.stringify(addedData),
            headers: {'Content-Type': 'application/json'},
            mode:"cors"
          })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        alert("Thank you for adding your job listing to our database. We will never get back to you. Screw you!")
    }

    return (
        <div className="employerwrapper">
            <h2>
                Employers Add Job Data to the Database!
            </h2>
            <form className="employerSubmit" onSubmit={handlesubmit}>
                <input type="text" name="title" value={addedData.title} placeholder="Job Title" onChange={handleChange}/>
                <input type="text" name="salary" value={addedData.salary} placeholder="Salary" onChange={handleChange}/>
                <input type="text" name="location" value={addedData.location} placeholder="Location" onChange={handleChange}/>

                <button className="employerSubmitButton" type="submit">
                    Employers Add Job to Database Here!
                </button>

            </form>
        </div>)
}

export default EmployeeForm;