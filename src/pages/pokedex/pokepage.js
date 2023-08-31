import React, { useEffect, useState } from "react";
import './styles.css';
import { Link, useParams } from "react-router-dom";

function Pokepage () {
    const { nomePokemon } = useParams();
    const [detalhesPokemon, setDetalhesPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
            .then(response => response.json())
            .then(data => setDetalhesPokemon(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [nomePokemon]);

    const dadosPokemon = () => {
        if (detalhesPokemon) {

            const nomeMaiusculo =
                detalhesPokemon.species.name.charAt(0).toUpperCase() + detalhesPokemon.species.name.slice(1);

            return {
                nome: nomeMaiusculo,
                imagem: detalhesPokemon.sprites.other["official-artwork"].front_default,
                id: detalhesPokemon.id,
                element: detalhesPokemon.types.map((tipo) => (tipo.type.name)),
                height: detalhesPokemon.height,
                weight: detalhesPokemon.weight
            };
        }
        return null;
    }

    const pokemon = dadosPokemon();
    
    return (
        <div className="container">
            <div className="pokedex-container">
                <h1>Pokémon</h1>
                <div className="pokedex-content">
                    {pokemon ? (
                        <>
                            {<img id="pokemon-img" alt="" src={pokemon.imagem}></img>}
                            <span id="pokemon-name">{pokemon.nome}</span>
                            <div className="element-container">
                                {pokemon.element.map(type => {
                                    return (
                                            <div className={'element-chip ' + type}>
                                                <img className='poke-elem-img' src={process.env.PUBLIC_URL + '/types/' + type + '.svg'} alt="" />
                                                <span className="type-description">{type}</span>
                                            </div>
                                    )
                                })}
                            </div>
                            <div className="description-container">
                                <div className='description'>
                                    <span>Pokédex nº</span>
                                    <span>{pokemon.id}</span>
                                </div>
                                <div className='description'>
                                    <span>Height:</span>
                                    <span>{pokemon.height}</span>
                                </div>
                                <div className='description'>
                                    <span>Weight:</span>
                                    <span>{pokemon.weight}</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="loading-container">
                            <div className="loading-gif">
                            </div>
                        </div>
                    )}
                </div>
                <Link id="backLink" to={'/'}>
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Pokepage;