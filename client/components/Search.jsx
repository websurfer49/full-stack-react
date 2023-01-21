import React, { useState } from "react";

function Search(props) {
    const [searchValue, setSearchValue] = useState("");
    const [returnedResults, setReturnedResults] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let output = props.tasks.filter((task) => {
            return task.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setReturnedResults(output);

    }
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Job Title" onChange={handleChange} />
            <button type="submit"> Search for Jobs Here by Title!  </button>
        </form>
    );

}
export default Search;