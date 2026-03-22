import "../App.css"; // reuse existing stylesheet for simplicity
import PokemonCardStats from "./PokemonCardStats";

export default function ZoomedCard({ pokemon, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className="pokemon-card-zoomed">
        <PokemonCardStats
          pokemon={pokemon}
          classImage="pokemon-image-circle-zoomed"
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
