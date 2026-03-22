import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import ZoomedCard from "./components/ZoomedCard";
import FilterButton from "./components/FilterButton";
import Socials from "./components/Socials";

function App(props) {
  const [selectedCard, setSelectedCard] = useState(null);

  const types = [...new Set(props.pokemons.map((pokemon) => pokemon.type))];

  const FILTER_MAP = {
    All: () => true,
    ...types.reduce((map, type) => {
      map[type] = (pokemon) => pokemon.type === type;
      return map;
    }, {}),
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const [filter, setFilter] = useState("All");

  const filterList = FILTER_NAMES.map((name) => {
    return (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    );
  });

  const pokemonsCardList = props.pokemons
    .filter(FILTER_MAP[filter])
    .map((p) => (
      <PokemonCard key={p.id} pokemon={p} onClick={setSelectedCard} />
    ));

  // Von Benutzer:Filb - selbst erstellt, nachgezeichnet nach Vorlage in einer Bedienungsanleitung von Pokémon., PD-Schöpfungshöhe, https://de.wikipedia.org/w/index.php?curid=658479
  // Von Nintendo - Übertragen aus en.wikipedia nach Commons. Based on DVD boxart., Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=16063375

  const pokemonLogo =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";

  return (
    <>
      <div class="header">
        <div class="spacer"></div>
        <img src={pokemonLogo} alt="Pokemon Logo" className="pokemon-logo" />
        <Socials />
      </div>
      <h1>Explorer</h1>

      <div className="filters">{filterList}</div>

      <div className="cards-container">{pokemonsCardList}</div>

      {selectedCard && (
        <ZoomedCard
          pokemon={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
}

export default App;
