import "../App.css"; // reuse existing stylesheet for simplicity
import PokemonCardStats from "./PokemonCardStats";

export default function ZoomedCard({ pokemon, onClose }) {
  return (
    <div onClick={onClose} className="pokemon-card-zoomed-overlay">
      <div onClick={(e) => e.stopPropagation()} className="pokemon-card-zoomed">
        <PokemonCardStats
          pokemon={pokemon}
          classImage="pokemon-image-circle-zoomed"
        />
        <button onClick={onClose} className="pokemon-card-button-zoomed">
          Close
        </button>
      </div>
    </div>
  );
}
