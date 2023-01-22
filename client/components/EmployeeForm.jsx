import React, { useState } from "react";




const EmployeeForm = () => {
    const handlesubmit = (e) => {
        e.preventDefault()
        alert("Thank you for adding your job listing to our database. We will never get back to you. Screw you!")
    }

    return (
        <div className="employerwrapper">
            <h2>
                Employers Add Job Data to the Database!
            </h2>
            <form className="employerSubmit" onSubmit={handlesubmit}>
                <input type="text" placeholder="Job Title" />
                <input type="text" placeholder="Salary" />
                <input type="text" placeholder="Location" />

                <button className="employerSubmitButton" type="submit">
                    Employers Add Job to Database Here!
                </button>

            </form>
        </div>)
}

export default EmployeeForm;