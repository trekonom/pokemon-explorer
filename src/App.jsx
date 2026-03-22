import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import FilterButton from "./components/FilterButton";

function App(props) {
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
    .map((p) => <PokemonCard key={p.id} pokemon={p} />);

  return (
    <>
      <h1>Pokemon Explorer</h1>

      <div className="filters">{filterList}</div>

      <div className="cards-container">{pokemonsCardList}</div>
    </>
  );
}

export default App;
