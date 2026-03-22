import React from "react";
import "../App.css"; // reuse existing stylesheet for simplicity

export default function PokemonCard({ pokemon }) {
  const { id, name, type, hp, attack } = pokemon;
  // Sprite image URL pattern:
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-circle">
        <img src={spriteUrl} alt={name} className="pokemon-image" />
      </div>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
    </div>
  );
}
