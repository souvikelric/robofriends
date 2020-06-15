import React, { Component } from "react";
import Cardlist from "./CardList";
import SearchField from "./SearchField";
// import { robots } from "./robots";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearch = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="header">ROBOFRIENDS</h1>
        <SearchField search={this.onSearch} />
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
