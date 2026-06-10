import { Link } from 'react-router'

function CharactersPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold tracking-tight">🐉 CineSpoilerS</h1>
      <Link to="/characters/1" className="text-zinc-400 underline">
        Ver personaje 1
      </Link>
    </div>
  )
}

export default CharactersPage