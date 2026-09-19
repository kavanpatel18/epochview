# EpochView

AI-powered historical map explorer built with React and TypeScript. EpochView turns a geographic location into an interactive historical timeline with generated narratives, visual content, audio narration, video, maps, and a conversational guide.

## Features

- Interactive location search and map exploration
- Historical eras and timeline navigation
- Three-dimensional/isometric historical visualization
- Generative-AI historical narratives
- Historical figures, events, and landmark cards
- Generated narration and cinematic video
- Historical-sites map
- Context-aware AI chat assistant
- Voice search

## Tech stack

React, TypeScript, Vite, Leaflet, Three.js, @react-three/fiber, @react-three/drei, lucide-react, and a generative AI SDK.

## Architecture

```text
User location
    |
    v
React + TypeScript UI
    |
    +--> Historical timeline
    +--> Historical sites
    +--> Entity images
    +--> Generated era visuals
    +--> Audio narration
    +--> Timeline video
    +--> Contextual chat
    |
    v
Interactive map / timeline / 3D experience
```

## Run locally

```bash
npm install
npm run dev
```

The generative-AI service reads its API credential from an environment variable. Do not commit API keys.

## Project structure

```text
App.tsx
components/
services/
assets/
index.tsx
types.ts
vite.config.ts
package.json
```

## Notes

The application depends on external AI and mapping services. Generated historical content should be treated as an interactive research aid and verified against authoritative historical sources.
