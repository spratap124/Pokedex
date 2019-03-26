import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import bg404 from './404.png'
import pokemon404 from './pokemon404.png'
import './Page404.css'

export default class Page404 extends Component {

  render() {
    return (
      <div className="container">
        <div className="imgHolder">
            <img src={bg404} alt=""/>
        </div>
        <div className="imgHolder">
            <img src={pokemon404} alt=""/>
        </div>
        <div>
            <Link to="/" >
               <button  className="btn btn-info">Go Back</button>
            </Link>
        </div>
      </div>
    )
  }
}
