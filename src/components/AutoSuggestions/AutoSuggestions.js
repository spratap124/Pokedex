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
                        return <Link to={`/pokemon/${pokemon.id}`}> <li className="list-group-item" onClick={clickHander(pokemon.name)} key={pokemon.id}>{pokemon.name}</li> </Link>
                            
                    })
                }
            </ul>
        </div>
       )
}

export default AutoSuggestions;