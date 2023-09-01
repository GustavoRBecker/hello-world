import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Pokedex() {
    const [nomesPokemon, setNomesPokemon] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=386')
            .then(response => response.json())
            .then(data => setNomesPokemon(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    let gen1 = nomesPokemon.slice(0, 151)
    let gen2 = nomesPokemon.slice(151, 251)
    let gen3 = nomesPokemon.slice(251, 386)
    const [selecionaGeracao, setSelecionaGeracao] = useState(gen1)

    return (
        <div className="pokeList-container">
            <div className="pokeList-content">
                <h1>Pokélist</h1>
                <div className="nameList">
                    <ul>
                        {nomesPokemon ? (
                            <>
                                {selecionaGeracao.map((pokemon) => (
                                    <li className="pokeLink" key={pokemon.name}>
                                        <Link className="pokeLink" to={`/pokepage/${pokemon.name}`}>
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
                        className= {"changer" + selecionaGeracao === 1 ? 'ativa' : ''}
                        onClick={() => setSelecionaGeracao(gen1)}
                    >
                        Gen 1
                    </button>
                    <button
                        className= {"changer" + selecionaGeracao === 2 ? 'ativa' : ''}
                        onClick={() => setSelecionaGeracao(gen2)}
                    >
                        Gen 2
                    </button>
                    <button
                        className= {"changer" + selecionaGeracao === 3 ? 'ativa' : ''}
                        onClick={() => setSelecionaGeracao(gen3)}
                    >
                        Gen 3
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;