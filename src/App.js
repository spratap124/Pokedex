import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//components
import NavBar from './components/NavBar/NavBar'
import PokemonListHolder from './components/PokemonListHolder/PokemonListHolder';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Page404 from './components/Page404/Page404';

class App extends Component {

  render() {
    return (
    
      <Router>

      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path="/" component={PokemonListHolder} />
          <Route  exact path="/pokemon/:id" component={PokemonDetails} search=""/>
          <Route  exact path="/404" component={Page404} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
