import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../api'

export function useCharacters() {
  return useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  })
}