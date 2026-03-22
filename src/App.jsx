import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App(props) {
  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <>
      <h1>Pokemon Explorer</h1>
      <div className="cards-container">
        {props.pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </>
  );
}

export default App;
