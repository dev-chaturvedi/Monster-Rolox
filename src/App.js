import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.components";
import { SearchBox } from "./Components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  render() {
    const { monster, searchField } = this.state;
    const filterMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monster Rolex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
