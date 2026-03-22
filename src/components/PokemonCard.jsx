import React, { useState } from "react";
import "../App.css"; // reuse existing stylesheet for simplicity
import PokemonCardStats from "./PokemonCardStats";

export default function PokemonCard({ pokemon, onClick }) {
  const { id, name, type, hp, attack } = pokemon;
  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <>
      <div
        className="pokemon-card"
        onClick={() => onClick(pokemon)}
        title="Click me to zoom"
      >
        <PokemonCardStats pokemon={pokemon} />
      </div>
    </>
  );
}
