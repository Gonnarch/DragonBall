import { Link, useParams } from 'react-router'

function CharacterDetailPage() {
  const { id } = useParams()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold">Detalle del personaje {id}</h1>
      <Link to="/" className="text-zinc-400 underline">← Volver</Link>
    </div>
  )
}

export default CharacterDetailPage