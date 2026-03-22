# Pokemon Explorer

A Vite + React 19 app for browsing Pokemon cards with filtering and zoom.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

Pokemon data is defined as a static `POKEMONS` array in `src/main.jsx` and passed as a prop to `<App>`. Each pokemon has: `id`, `name`, `type`, `hp`, `attack`.

Sprite images are fetched from PokeAPI:
`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

### Components

- `App` — root; manages `selectedCard` and `filter` state; derives filter list from pokemon types
- `PokemonCard` — clickable card; calls `onClick(pokemon)` to set selected card
- `PokemonCardStats` — shared stats display (image circle, name, type, hp, attack); used in both card and zoomed views via `classImage` prop
- `ZoomedCard` — full-screen overlay modal; closes on backdrop click or Close button
- `FilterButton` — type filter toggle; uses `aria-pressed` for active state

### Styling

All styles in `src/App.css` and `src/index.css`. Pokemon brand color palette defined as CSS variables in `:root` (`--pokemon-red`, `--pokemon-yellow`, `--pokemon-blue`, etc.). Font: Russo One (Google Fonts, loaded in `index.html`).
