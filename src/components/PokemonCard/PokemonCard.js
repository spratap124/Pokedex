import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './PokemonCard.css'
import logo from './logo.png'


//color code for pokemon type

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

export default class PokemonCard extends Component {

  state ={
    name: '',
    id: '',
    pokemonType: [],
    imageURL: '',
    isImageLoading: true
  }

  componentDidMount(){
    const name = this.props.pokemon.name
    const id = this.props.pokemon.id;
    const pokemonType = this.props.pokemon.type;
    const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    this.setState({
      name,
      id,
      pokemonType,
      imageURL
    })
  }

  render() {
    return (
      <div className="col-md-2 col-sm-12 mb-5 ">
        <Link to={`pokemon/${this.state.id}`}>
        <div className="card" >
            <div className=" pokemonIndex">
              <span className="badge"> {this.state.id} </span>
            </div>
            {
              this.state.isImageLoading ? (<img src={logo} alt="" className="card-img-top d-block loadingImage" />) : null
            }
              
            <img className="card-img-top" 
              src={this.state.imageURL} 
              alt={this.state.name.english} 
              onLoad={()=> this.setState({isImageLoading:false})}
              style = {
                this.state.isImageLoading ? {display: 'none'} : {display: 'block'}
              }
              />
            <div className="card-body">
                <h5 className="card-title">{this.state.name.english}</h5>
                <div className="typeHolder">
                  {
                    this.state.pokemonType.map((type, index) =>{
                      return  <span 
                              key={index}
                              className="badge pokemonType" 
                              style={{
                                    backgroundColor: `#${TYPE_COLORS[type.toLowerCase()]}`,
                                    color: 'white'}}>
                                    {type}
                              </span>
                    })
                  }
                 
                </div>              
            </div>
          </div>  
        </Link>
         
       </div>
    )
  }
}
