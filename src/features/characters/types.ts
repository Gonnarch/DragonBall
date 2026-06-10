export interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
}

export interface CharactersResponse {
  items: Character[]
  meta: {
    totalItems: number
    currentPage: number
    totalPages: number
  }
}