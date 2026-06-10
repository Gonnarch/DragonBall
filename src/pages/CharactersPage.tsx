import { useCharacters } from '@/features/characters/hooks/useCharacters'
import { CharacterCard } from '@/features/characters/components/CharacterCard'
import { CharacterCardSkeleton } from '@/features/characters/components/CharacterCardSkeleton'

function CharactersPage() {
  const { data: characters, isLoading, isError } = useCharacters()

  return (
    <div className="min-h-screen px-6 py-10">
      <header className="mx-auto mb-10 max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">🐉 Dragon Ball</h1>
        <p className="mt-2 text-zinc-400">Personajes de Dragon Ball</p>
      </header>

      <main className="mx-auto max-w-6xl">
        {isError && (
          <p className="text-red-400">Ocurrió un error al cargar los personajes.</p>
        )}

        {!isLoading && characters?.length === 0 && (
          <p className="text-zinc-400">No hay personajes para mostrar.</p>
        )}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CharacterCardSkeleton key={i} />
              ))
            : characters?.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
        </div>
      </main>
    </div>
  )
}

export default CharactersPage