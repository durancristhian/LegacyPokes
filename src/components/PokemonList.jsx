import React, { Component } from 'react'
import PokemomCard from './PokemonCard'

class PokemonList extends Component {
  render() {
    const { list } = this.props

    return list.map(pokemon => (
      <PokemomCard pokemon={pokemon} key={pokemon.id} />
    ))
  }
}

export default PokemonList
