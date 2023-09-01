import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Pokedex() {
    
    const offsetGeracoes = {
        gen1: {min: 0, max: 151},
        gen2: {min: 151, max: 251},
        gen3: {min: 251, max: 386}
    }
    const [nomesPokemon, setNomesPokemon] = useState([])
    const [selecionaGeracao, setSelecionaGeracao] = useState(offsetGeracoes.gen1)

    console.log(selecionaGeracao.min)
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${selecionaGeracao.min}&limit=${selecionaGeracao.max}`)
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
                        {selecionaGeracao ? (
                            <>
                                {nomesPokemon.map((pokemon) => (
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
                        onClick={() => setSelecionaGeracao(offsetGeracoes.gen1)}
                    >
                        Gen 1
                    </button>
                    <button
                        className= {"changer" + selecionaGeracao === 2 ? 'ativa' : ''}
                        onClick={() => setSelecionaGeracao(offsetGeracoes.gen2)}
                    >
                        Gen 2
                    </button>
                    <button
                        className= {"changer" + selecionaGeracao === 3 ? 'ativa' : ''}
                        onClick={() => setSelecionaGeracao(offsetGeracoes.gen3)}
                    >
                        Gen 3
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokedex;