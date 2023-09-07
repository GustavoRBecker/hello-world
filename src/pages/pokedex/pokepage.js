import React, { useEffect, useState } from "react";
import './styles.css';
import { Link, useParams } from "react-router-dom";
import Info from "../../components/Info/infos";
import PokeStats from "../../components/Stats/stats";

function Pokepage () {
    const [statsOnOff, setStatsOnOff] = useState(true);
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
                weight: detalhesPokemon.weight,
                HP : detalhesPokemon.stats[0].base_stat,
                ATK : detalhesPokemon.stats[1].base_stat,
                DEF : detalhesPokemon.stats[2].base_stat,
                SATK : detalhesPokemon.stats[3].base_stat,
                SDEF : detalhesPokemon.stats[4].base_stat,
                SPD : detalhesPokemon.stats[5].base_stat,
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
                            <button className={"stats-btn " + (statsOnOff ? 'on' : 'off')} onClick={() => setStatsOnOff(!statsOnOff)}>
                                Stats
                            </button>
                            {statsOnOff ? (
                                <Info pokemon = {pokemon} />
                            ) : (
                                <PokeStats pokemon = {pokemon} />
                            )}
                        </>
                    ) : (
                        <div className="loading-container">
                            <div className="loading-gif">
                            </div>
                        </div>
                    )}
                </div>
                <Link id="backLink" to={'/'}>
                    <button id= "returnPokepage">Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Pokepage;