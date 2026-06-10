# 🐉 CineSpoilerS

E-commerce básico de tickets construido con **React**, que consume la [Dragon Ball API](https://dragonball-api.com) para listar personajes y mostrar su detalle. Base escalable, sin sobreingeniería.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?logo=shadcnui&logoColor=white)

## 🚀 Stack

- **React + Vite + TypeScript** — base del proyecto
- **Tailwind v4 + shadcn/ui** — UI oscura y minimalista
- **React Router v7** — navegación (lista / detalle)
- **Axios** — cliente HTTP centralizado
- **TanStack Query** — cache, loading y error de datos

## 🖼️ Evidencias

| Paso 1 | Paso 2 |
|--------|--------|
| ![Paso 1](./docs/paso%201.png) | ![Paso 2](./docs/paso%202.png) |

| Paso 3 | Paso 4 |
|--------|--------|
| ![Paso 3](./docs/paso%203.png) | ![Paso 4](./docs/paso%204.png) |

## 📁 Estructura

\`\`\`
src/
├── components/ui/        # componentes de shadcn
├── features/characters/  # dominio de personajes
│   ├── components/        # CharacterCard, CharacterCardSkeleton
│   ├── hooks/             # useCharacters, useCharacter
│   ├── api.ts             # llamadas a la API
│   └── types.ts           # tipos
├── lib/api.ts            # instancia de Axios
└── pages/               # CharactersPage, CharacterDetailPage
\`\`\`

## ⚙️ Cómo correr

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre http://localhost:5173