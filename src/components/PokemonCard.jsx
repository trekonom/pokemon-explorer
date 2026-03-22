import React from "react";
import "../App.css"; // reuse existing stylesheet for simplicity

export default function PokemonCard({ pokemon }) {
  const { id, name, type, hp, attack } = pokemon;
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <img src={spriteUrl} alt={name} className="pokemon-image" />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
    </div>
  );
}
