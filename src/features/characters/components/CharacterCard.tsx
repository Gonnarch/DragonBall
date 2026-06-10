import { Link } from 'react-router'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Character } from '../types'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link to={`/characters/${character.id}`}>
      <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-600">
        <div className="flex h-64 items-center justify-center bg-zinc-950 p-4">
          <img
            src={character.image}
            alt={character.name}
            loading="lazy"
            className="h-full object-contain"
          />
        </div>
        <CardContent className="space-y-2 p-4">
          <h3 className="text-lg font-semibold">{character.name}</h3>
          <Badge variant="secondary">{character.race}</Badge>
        </CardContent>
      </Card>
    </Link>
  )
}