import { Routes, Route } from 'react-router'
import CharactersPage from '@/pages/CharactersPage'
import CharacterDetailPage from '@/pages/CharacterDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterDetailPage />} />
    </Routes>
  )
}

export default App