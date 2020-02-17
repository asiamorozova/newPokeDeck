import React from "react";

export default class List extends React.Component {
  render() {
    const { pokemonObj } = this.props;
    const { pokemon, url_image, type_1, speed, hp } = pokemonObj;
    console.log(pokemonObj);
    return (
      <div>
        <p>
          <img src={url_image} alt={url_image} />
        </p>
        <p>name: {pokemon}</p>
        <p>Type: {type_1} </p>
        <p>Speed: {speed} </p>
        <p>HP: {hp} </p>
      </div>
    );
  }
}
