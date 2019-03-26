import React, { Component } from 'react'

import './NavBar.css'
import logo from './logo.png'

export default class NavBar extends Component {

state = { searchText: '' };
  
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange =(e)=> {
    console.log("Oye oye", e.target.name);
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
          <nav className="navbar navbar-expand-md bg-red fixed-top">
            <div className="container">
              <a href="/" className="navbar-brand">
              <img src={logo}></img>Pokédex
              </a>
              <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search Pokemon" aria-label="Search" name="yo" onChange={this.handleChange}/>
                <button className="btn btn-info my-2 my-sm-0" type="button">Search</button>
              </form>
            </div>
          </nav>
    )
  }
}
