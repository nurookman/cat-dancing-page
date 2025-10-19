import { useState } from 'react'
import './styles/global.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="container">
      <h1>🐱 댄싱 고양이 🐱</h1>
      <DancingCat />
    </div>
  )
}

export default App
