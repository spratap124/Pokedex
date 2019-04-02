import React, { Component } from 'react'
// list of all pokemon
import pokedex from '../../pokedex.json'
import './PokemonDetails.css'
import logo from './logo.png'

const pokemonList = JSON.parse(JSON.stringify(pokedex));


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

export default class PokemonDetails extends Component {

    state = {
        pokemon: {},
        imageURL : '',
        name:{},
        base:{},
        type:[],
        isImageLoading:true
    }

    fetchDetails(id){

        //if id > 807 redirect to 404 page
        if (id > 807) {
            return this.props.history.push('/404')
        }

        const pokemon = pokemonList.find((el) => {
            return el.id == id;
        });

        // console.log(pokemon);

        const type = pokemon.type;
        const name = pokemon.name;
        const base = pokemon.base;

        const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

        this.setState({
            pokemon,
            imageURL,
            type,
            name,
            base
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchDetails(id);
        
    }

    componentWillReceiveProps(newProps){
        const id = newProps.match.params.id;
        this.fetchDetails(id);
    }


  render() {
    return (
      <div className="container">
        <div className="col">
            <div className="card detailsCard">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>#{this.state.pokemon.id}</h5>
                        </div>
                        <div className="col-md-4">
                                <h5 className="text-center">{this.state.name.english}</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="float-right">
                                    {
                                        this.state.type.map((type1, index) => {
                                            return <span
                                                key={index}
                                                className="badge pokemonType"
                                                style={{
                                                    backgroundColor: `#${TYPE_COLORS[type1.toLowerCase()]}`,
                                                    color: 'white'
                                                }}>
                                                {type1}
                                            </span>
                                        })
                                    } 
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-body">
                    <div className="align-items-center" >
                        <div className="row">
                            <div className="col-md-6">
                                    {
                                        this.state.isImageLoading ? (<img src={logo} alt="" className="card-img-top d-block loadingImage" />) : null
                                    }
                                <img src={this.state.imageURL} alt={this.state.pokemon.name} 
                                    onLoad={() => this.setState({ isImageLoading: false })}
                                    style={
                                        this.state.isImageLoading ? { display: 'none' } : { display: 'block' }
                                    }
                                />
                            </div>
                            <div className="col-md-6">  
                                <div className="nameContainer">
                                        <ul className="list-group">
                                            <li className="list-group-item active"><h4 className="text-center">NAME</h4> </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>English</h5> </div>
                                                    <div className="col-md-6">{this.state.name.english} </div>
                                                </div>
                                                
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Japanese</h5> </div>
                                                    <div className="col-md-6">{this.state.name.japanese} </div>
                                                </div>
                                                
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Chinese</h5> </div>
                                                    <div className="col-md-6">{this.state.name.chinese} </div>
                                                </div>
                                            </li>
                                        </ul>
                                </div>

                                <div className="profileDetails">
                                        <ul className="list-group">
                                            <li className="list-group-item active"><h4 className="text-center">PROFILE</h4> </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>HP</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base.HP}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base.HP}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Attack</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base.Attack}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base.Attack}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Defense</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base.Defense}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base.Defense}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Special Attack</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base["Sp. Attack"]}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base["Sp. Attack"]}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Special Defence</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base["Sp. Defense"]}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base["Sp. Defense"]}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6"> <h5>Speed</h5> </div>
                                                    <div className="col-md-6">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: `${this.state.base.Speed}%` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><small>{this.state.base.Speed}</small> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
