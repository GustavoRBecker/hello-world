import React from "react";
import './styles.css';

function Info ({ pokemon }) {
    const pokeInformation = [
        {name: 'Pokédex nº', pokeInfo: pokemon.id},
        {name: 'Height', pokeInfo: pokemon.height},
        {name: 'Weight', pokeInfo: pokemon.weight}
    ]

    return (
        <>
            <div className="description-container">
                {pokeInformation.map(item => {
                    return (
                        <div className='description'>
                            <span>{item.name}</span>
                            <span>{item.pokeInfo}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Info;