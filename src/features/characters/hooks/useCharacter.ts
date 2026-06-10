import { useQuery } from '@tanstack/react-query'
import { getCharacterById } from '../api'

export function useCharacter(id: string) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
  })
}