import React, { Component } from 'react'

import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
          <nav className="navbar navbar-expand-md bg-red fixed-top">
            <div className="container">
              <a href="#" className="navbar-brand">
                <img src="logo.png"></img>Pokédex
              </a>
            </div>
          </nav>
    )
  }
}
