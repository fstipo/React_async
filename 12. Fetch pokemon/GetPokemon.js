import React, { useState } from 'react';
import { fetchData } from './fetchData';

const GetPokemon = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(pokemonId);
  fetchData(pokemonId).then((data) => setPokemon(data));

  return (
    <>
      <button
        type="button"
        className="my-3 btn btn-danger"
        onClick={() => setPokemonId(pokemon.id + 1)}
      >
        Change pokemon
      </button>
      <div className="container display-2 text-start text-primary">
        {pokemon.name}
      </div>
    </>
  );
};

export default GetPokemon;
