import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

const offsetGeracoes = [
    {min: 0, max: 151},
    {min: 151, max: 100},
    {min: 251, max: 135}
]

function Pokedex() {

    const [nomesPokemon, setNomesPokemon] = useState([])
    const [indiceGeracaoSelecionada, setIndiceGeracaoSelecionada] = useState(0)
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offsetGeracoes[indiceGeracaoSelecionada].min}&limit=${offsetGeracoes[indiceGeracaoSelecionada].max}`)
            .then(response => response.json())
            .then(data => setNomesPokemon(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, [indiceGeracaoSelecionada]);

    return (
        <div className="pokeList-container">
            <div className="pokeList-content">
                <h1>Pokélist</h1>
                <div className="nameList">
                    <ul>
                        {nomesPokemon ? (
                            <>
                                {nomesPokemon.map((pokemon) => (
                                    <li className="pokeLink" key={pokemon.name}>
                                        <Link key={pokemon.name} className="pokeLink" to={`/pokepage/${pokemon.name}`}>
                                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                        </ Link>
                                    </li>
                                ))}
                            </>
                        ) : (
                            <div className="loading-container">
                                <div className="loading-gif">
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="generation-container">
                    <button
                        className= {"changer " + (indiceGeracaoSelecionada === 0 ? 'ativa' : '')}
                        onClick={() => setIndiceGeracaoSelecionada(0)}
                    >
                        Gen 1
                    </button>
                    <button
                        className= {"changer " + (indiceGeracaoSelecionada === 1 ? 'ativa' : '')}
                        onClick={() => setIndiceGeracaoSelecionada(1)}
                    >
                        Gen 2
                    </button>
                    <button
                        className= {"changer " + (indiceGeracaoSelecionada === 2 ? 'ativa' : '')}
                        onClick={() => setIndiceGeracaoSelecionada(2)}
                    >
                        Gen 3
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;