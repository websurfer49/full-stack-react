import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/stuff", {
      mode: 'cors'
    }).then((res) => res.text()).then(console.log)
  }

  render() {
    return (
      <div>Hi</div>
    );
  }
}

export default App;
