import React, { useState, Suspense, useTransition } from 'react';
import { fetchData, suspensify } from './fetchData';

let initialPokemon = suspensify(fetchData(1));

const GetPokemon = () => {
  const [pokemonResource, setPokemonResource] = useState(initialPokemon);
  let pokemon = pokemonResource.read();
  let [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        type="button"
        className="my-3 btn btn-danger"
        onClick={() =>
          startTransition(() =>
            setPokemonResource(suspensify(fetchData(pokemon.id + 1)))
          )
        }
      >
        Change pokemon
      </button>
      <Suspense fallback="loading...">
        <div
          style={{ opacity: isPending ? '0.2' : '1' }}
          className="container display-2 text-start text-primary"
        >
          {pokemon.name}
        </div>
      </Suspense>
    </>
  );
};

export default GetPokemon;
