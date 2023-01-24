import React, { useState } from "react";

const EmployeeForm = () => {
    // making a state with an empty object with making porperties initially as empty
    const [addedData, setAddedData] = useState({
        title: '',
        salary: '',
        location: ''
    })

    const handleChange = (e) => {
        // updating the addedData with whatever the user is typing in input field.
        // ...addedData is cloning addedData, keeping the remaining values, and updating the respective property of object for each input
        setAddedData({ ...addedData, [e.target.name]: e.target.value });
    }

    const handlesubmit = (e) => {
        // prevents the default behavior of form, and submitting it to the server.
        e.preventDefault();

        // making a post API call to this endpoint, to send data to database, that expressjs will handle this request.
        fetch('http://localhost:3000/joblistings', {
            method: 'POST',
            body: JSON.stringify(addedData),
            headers: { 'Content-Type': 'application/json' },
            mode: "cors"
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                alert("Thank you for adding your job listing to our database. We will never get back to you. Screw you!")
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="employerwrapper">
            <h2>
                Employers Add Job Data to the Database!
            </h2>
            <form className="employerSubmit" onSubmit={handlesubmit}>
                {/* onchange calling handleChange callback function  */}
                <input type="text" name="title" value={addedData.title} placeholder="Job Title" onChange={handleChange} />
                <input type="text" name="salary" value={addedData.salary} placeholder="Salary" onChange={handleChange} />
                <input type="text" name="location" value={addedData.location} placeholder="Location" onChange={handleChange} />

                <button className="employerSubmitButton" type="submit">
                    Employers Add Job to Database Here!
                </button>

            </form>
        </div>
    )
}

export default EmployeeForm;