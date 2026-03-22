import React from "react";
import "../App.css";

export default function PokemonCardStats({
  pokemon,
  classImage = "pokemon-image-circle",
  maxStat = 200,
}) {
  const { id, name, type, hp, attack } = pokemon;
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const hpValue = Math.min(hp, 100);
  const attackValue = Math.min(attack, 100);

  const getBarWidth = (value) => `${Math.min((value / maxStat) * 100, 100)}%`;

  return (
    <>
      <div className={classImage}>
        <img src={spriteUrl} alt={name} className="pokemon-image" />
      </div>

      <h2 className="spirit-name">{name}</h2>
      <h4 className="spirit-type">{type}</h4>

      <div className="stat-row">
        <span className="stat-label">HP</span>
        <div className="stat-bar-bg">
          <div
            className="stat-bar-fill stat-bar-hp"
            style={{ width: getBarWidth(hp) }}
          />
        </div>
        <span className="stat-value">{hp}</span>
      </div>

      <div className="stat-row">
        <span className="stat-label">Attack</span>
        <div className="stat-bar-bg">
          <div
            className="stat-bar-fill stat-bar-attack"
            style={{ width: getBarWidth(attack) }}
          />
        </div>
        <span className="stat-value">{attack}</span>
      </div>
    </>
  );
}
