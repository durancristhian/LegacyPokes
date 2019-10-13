import React, { Component } from 'react'
import './PokemonCard.css'

class PokemonCard extends Component {
  state = {
    selection: {}
  }

  onCheckboxChange = (status, movesetId) => {
    this.setState(state => ({
      selection: {
        ...state.selection,
        [movesetId]: status
      }
    }))
  }

  renderMovesetByKind = (movesetType, title, pokemonId) => {
    const { pokemon } = this.props
    const { selection } = this.state
    const movesets = pokemon.legacyMoveset.filter(
      moveset => moveset.kind === movesetType
    )

    if (!movesets.length) {
      return null
    }

    return (
      <React.Fragment>
        <h4>{title}</h4>
        <fieldset id={`${pokemonId}-${movesetType}`}>
          {movesets.map((moveset, index) => (
            <label key={moveset.id}>
              <input
                id={moveset.id}
                type="checkbox"
                name={`${pokemonId}-${movesetType}`}
                onChange={event =>
                  this.onCheckboxChange(event.target.checked, moveset.id)
                }
                defaultChecked={selection[moveset.id]}
              />
              {moveset.name}
            </label>
          ))}
        </fieldset>
      </React.Fragment>
    )
  }

  submit = () => {
    const { pokemon } = this.props
    const { selection } = this.state
    const userSelection = Object.entries(selection)
      .filter(([_, value]) => !!value)
      .map(([movesetId]) => movesetId)

    console.log(pokemon.id, userSelection)
  }

  thereIsSelection = () => {
    const { selection } = this.state

    return Object.entries(selection).some(([_, value]) => !!value)
  }

  render() {
    const { pokemon } = this.props

    return (
      <div className="pokemon">
        <input id={pokemon.id} type="checkbox" className="radio" />
        <label htmlFor={pokemon.id} className="label">
          Label: {pokemon.name}
        </label>
        <section className="section">
          <h3>{pokemon.name}</h3>
          <img
            src={pokemon.images.front}
            alt={`${pokemon.name} front`}
            height={50}
          />
          {this.renderMovesetByKind('quick', 'Quick Moves', pokemon.id)}
          {this.renderMovesetByKind('charge', 'Charge Moves', pokemon.id)}
          {this.thereIsSelection() && (
            <button type="button" onClick={this.submit}>
              Agregar
            </button>
          )}
        </section>
      </div>
    )
  }
}

export default PokemonCard
