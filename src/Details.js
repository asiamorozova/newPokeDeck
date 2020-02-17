import React, { Component } from "react";
import { getCharacter } from "./Api.js";
import List from "./List.js";

export default class Details extends Component {
  state = { character: {} };

  async componentDidMount() {
    const data = await getCharacter(this.props.match.params.pokemonId);
    console.log(data);
    if (data.body.results) {
      this.setState({ character: data.body.results[0] });
    }
  }
  render() {
    const { character } = this.state;
    console.log(character);
    return <List pokemonObj={character} />;
  }
}
