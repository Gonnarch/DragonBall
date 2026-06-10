import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useCharacter } from '@/features/characters/hooks/useCharacter'

function CharacterDetailPage() {
  const { id } = useParams()
  const { data: character, isLoading, isError } = useCharacter(id!)
  const [tickets, setTickets] = useState(0)

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Skeleton className="h-[28rem] w-full" />
      </div>
    )
  }

  if (isError || !character) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-red-400">No se pudo cargar el personaje.</p>
        <Link to="/" className="mt-4 inline-block text-zinc-400 underline">
          ← Volver
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link to="/" className="mb-6 inline-block text-zinc-400 underline">
        ← Volver
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg bg-zinc-900 p-6">
          <img
            src={character.image}
            alt={character.name}
            className="max-h-[28rem] object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">{character.name}</h1>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{character.race}</Badge>
            <Badge variant="secondary">{character.gender}</Badge>
            <Badge variant="secondary">{character.affiliation}</Badge>
          </div>

          <div className="space-y-1 text-sm text-zinc-400">
            <p>Ki base: <span className="text-zinc-100">{character.ki}</span></p>
            <p>Ki máximo: <span className="text-zinc-100">{character.maxKi}</span></p>
          </div>

          <p className="leading-relaxed text-zinc-300">{character.description}</p>

          <div className="space-y-2 pt-2">
            <Button className="w-full" onClick={() => setTickets((t) => t + 1)}>
              🎟️ Comprar ticket
            </Button>
            {tickets > 0 && (
              <p className="text-center text-sm text-zinc-400">
                Tienes {tickets} ticket{tickets > 1 ? 's' : ''} de {character.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetailPage