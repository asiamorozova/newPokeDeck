import React, { Component } from "react";
import request from "superagent";
import List from "./List.js";
import SearchBar from "./Searchbar.js";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    searchQuery: this.props.match.params.name,
    characters: []
  };
  async componentDidMount() {
    if (this.props.match.params.name) {
      const data = await request.get(
        `https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`
      );

      this.setState({ characters: data.body.results });
    }
  }
  handleSearch = async e => {
    e.preventDefault();

    const data = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`
    );

    this.setState({
      characters: data.body.results
    });
    this.props.history.push(this.state.searchQuery);
  };
  handleChange = e => this.setState({ searchQuery: e.target.value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            searchQuery={this.state.searchQuery}
            handleSearch={this.handleSearch}
            handleChange={this.handleChange}
          />
        </header>
        <ul>
          {this.state.characters.map(character => (
            <Link to={`characters/${character.pokemon}`}>
              <List pokemonObj={character} />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
