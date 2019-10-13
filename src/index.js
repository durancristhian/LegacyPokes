import React from 'react'
import ReactDOM from 'react-dom'
import PokemonList from './components/PokemonList'
import './styles.css'

import legacyData from '../data/legacy'

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Select the legacy pokemon you are looking for:</h2>
      <PokemonList list={legacyData} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
