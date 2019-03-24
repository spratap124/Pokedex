import React  from 'react'

import './PokemonListHolder.css'
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonListHolder = (props)=>  {
 
    return (
      <div className="container listHolder">
      <div className="row">

        {
           props.list.map(pokemon =>{
            return <PokemonCard pokemon={pokemon} key={pokemon.id}  />
          })
        }
        </div>
      </div>
    )
  }
export default PokemonListHolder;
