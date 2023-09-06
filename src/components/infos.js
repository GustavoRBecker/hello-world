import React from "react";
import './styles.css';

function Info ({ pokemon }) {
    return (
        <>
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
    )
}

export default Info;