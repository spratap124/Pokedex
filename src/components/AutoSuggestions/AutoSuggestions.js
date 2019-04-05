import React from 'react'
import {Link} from 'react-router-dom'
import './AutoSuggestions.css'

const AutoSuggestions = (props)=>{

let  clickHander = (name) =>{
    // console.log(name)
        return function(){
            props.triggerNameSelect(name)
        }
    }
  
       return(
           <div className={props.isOpen ? "suggestionListHolder showSuggestions" : "suggestionListHolder hideSuggestions"}>
            <ul className="list-group">
                {
                    props.suggestionsList.map((pokemon) => {
                        return  <li className="list-group-item" onClick={clickHander(pokemon.name)} key={pokemon.id}><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link></li> 
                            
                    })
                }
            </ul>
        </div>
       )
}

export default AutoSuggestions;