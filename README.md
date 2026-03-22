# Pokemon Explorer

A React app to browse and filter Pokemon cards with a retro Pokemon aesthetic.

## Features

- Browse a grid of 20 Pokemon cards with sprites, type, HP, and Attack stats
- Filter cards by type (Grass, Fire, Water, Electric, and more)
- Click any card to open a zoomed modal with full details
- Retro Pokemon brand styling with drop-shadow effects and hover animations

## Tech Stack

- React 19
- Vite
- Pokemon sprites from [PokeAPI](https://pokeapi.co/)

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── main.jsx              # Entry point + Pokemon data
├── App.jsx               # Root component (filter + zoom state)
├── App.css               # All app styles
├── components/
│   ├── PokemonCard.jsx   # Clickable card wrapper
│   ├── PokemonCardStats.jsx  # Card content (shared with zoom view)
│   ├── ZoomedCard.jsx    # Full-screen modal overlay
│   └── FilterButton.jsx  # Type filter toggle button
└── assets/               # Logo SVG
```
