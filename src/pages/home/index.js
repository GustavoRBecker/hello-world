import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Pokedex() {
    const [nomesPokemon, setNomesPokemon] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
            .then(response => response.json())
            .then(data => setNomesPokemon(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div className="pokeList-container">
            <div className="pokeList-content">
                <h1>Pokélist</h1>
                <div className="nameList">
                    <ul>
                        {nomesPokemon.map((pokemon) => (
                            <li className="pokeLink" key={pokemon.name}>
                                <Link className="pokeLink" to={`/pokepage/${pokemon.name}`}>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </ Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;