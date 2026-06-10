import { api } from '@/lib/api'
import type { Character, CharactersResponse } from './types'

export async function getCharacters(): Promise<Character[]> {
  const { data } = await api.get<CharactersResponse>('/characters', {
    params: { page: 1, limit: 12 },
  })
  return data.items
}

export async function getCharacterById(id: string): Promise<Character> {
  const { data } = await api.get<Character>(`/characters/${id}`)
  return data
}