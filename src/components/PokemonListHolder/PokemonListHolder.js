import React, { Component } from 'react'

import './PokemonListHolder.css'
// list of all pokemon
import pokedex from '../../pokedex.json'
import PokemonCard from '../PokemonCard/PokemonCard';

export default class PokemonListHolder extends Component {

    state = {
    allPokemonList: [],
    currentPokemonList:[]
  }

  componentDidMount(){
    const allPokemonList = JSON.parse(JSON.stringify(pokedex));
    const currentPokemonList = allPokemonList.slice(0,150);

    this.setState({
      allPokemonList,
      currentPokemonList
    })
  }

  render() {
    return (
            <div className="container listHolder">
              <div className="row">

                {
                this.state.currentPokemonList.map(pokemon =>{
                    return <PokemonCard pokemon={pokemon} key={pokemon.id}  />
                  })
                }
                </div>
            </div>
    )
  }
}

