import React, { useState } from "react";

function Search(props) {
    const [searchValue, setSearchValue] = useState("");
    const [returnedResults, setReturnedResults] = useState([])

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

        <div className="searchwrapper">
            <div className="imagesidebyside">
                <div className="verticalimg">
                    <div className="imagewrapper">
                        <img src="https://s.hdnux.com/photos/60/22/31/12658251/4/rawImage.jpg" alt="well this isn't good!"></img>
                    </div>
                    <div className="imagewrapper">
                        <img src="https://ardalis.com/img/NotSureIfGoodProgrammer.jpg" alt="well this isn't good!"></img>
                    </div>
                    <div className="imagewrapper">
                        <img src="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/03/full-stack-overflow-developer-1024x967.jpg.webp" alt="well this isn't good!"></img>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Job Title" onChange={handleChange} />
                    <button type="submit"> Search for Jobs Here!  </button>
                </form>
                <div className="verticalimg">
                    <div className="imagewrapper">
                        <img src="https://s.hdnux.com/photos/60/22/32/12658359/6/1200x0.jpg" alt="IMG TO LOAD HERE" />
                    </div>
                    <div className="imagewrapper">
                        <img src="https://miro.medium.com/max/1116/1*VqEiYJgoiGl0kXeAFzE4yQ.png" alt="IMG TO LOAD HERE" />
                    </div>
                    <div className="imagewrapper">
                        <img src="https://images.prismic.io/friday-marketing/dc318c68-5316-4170-83f7-5f398ac9ff05_work-meme2.jpg?auto=compress,format" alt="IMG TO LOAD HERE" />
                    </div>
                </div>
            </div>
            <div className="searchresults">
                {returnedResults.length > 0 &&
                    <div>
                        <h2>Search Results</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Salary
                                    </th>
                                    <th>
                                        Location
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {returnedResults.map((resultss, index) => {
                                    return <tr key={index}><td>{resultss.title}</td> <td>{resultss.salary}</td> <td>{resultss.location}</td></tr>
                                })}
                            </tbody>
                        </table>

                    </div>
                }
            </div>
        </div>

    );
}
export default Search;