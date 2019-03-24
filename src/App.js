import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

// list of all pokemon
import pokedex from './pokedex.json'


//components
import NavBar from './components/NavBar/NavBar'
import PokemonListHolder from './components/PokemonListHolder/PokemonListHolder';

class App extends Component {

  state = {
    pokemon : JSON.parse(JSON.stringify(pokedex))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PokemonListHolder list={this.state.pokemon.slice(0,151)} />
      </div>
    );
  }
}

export default App;
