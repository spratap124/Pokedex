import React, { Component } from 'react'

import './NavBar.css'
import logo from './logo.png'
import pokedex from '../../pokedex.json'
import AutoSuggestions from '../AutoSuggestions/AutoSuggestions';


const allPokemonList = JSON.parse(JSON.stringify(pokedex));

const nameList = allPokemonList.map((el) => {
  return {
      name:el.name.english,
      id: el.id
    }
})

const getSuggestions = value => {
  // const inputValue = value.toLowerCase();
  const inputLength = value.length;

  return inputLength === 0 ? [] : nameList.filter(pokemon =>
    pokemon.name.toLowerCase().slice(0, inputLength) === value
  );
};


// import AutoSuggestions from '../AutoSuggestions/AutoSuggestions';


export default class NavBar extends Component {

  state = { 
    searchText: '',
    suggestionsList:[],
    showSuggestions:false
  };
  
  constructor(props) {
    super(props);
    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this)
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  

  handleChange =(e)=> {
    let search = e.target.value;

    let suggestionsList = getSuggestions(search);
    
    this.setState({
      searchText: search,
      showSuggestions: search.length > 0 ? true : false,
      suggestionsList
    });
    
  }

  setSearchText = (val)=>{
    
    this.setState({
      searchText: val,
      showSuggestions: !this.state.showSuggestions
    })
  }
 

  render() {
    return (
          <nav className="navbar navbar-expand-md bg-red fixed-top">
            <div className="container">
              <a href="/" className="navbar-brand">
              <img src={logo} alt="logo"></img>Pokédex
              </a>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" value={this.state.searchText} type="text" placeholder="Search Pokemon" aria-label="Search" name="yo" onChange={this.handleChange} list="suggestions"/>
                {/* <button className="btn btn-info my-2 my-sm-0" type="button">Search</button> */}
                <AutoSuggestions isOpen={this.state.showSuggestions} suggestionsList={this.state.suggestionsList} triggerNameSelect={this.setSearchText} />
              </form>
            </div>
          </nav>
    )
  }
}
