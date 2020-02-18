import request from "superagent";

export const getCharacter = pokemonId =>
  request.get(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${pokemonId}`
  );
