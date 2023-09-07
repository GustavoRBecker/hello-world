import React from "react";
import './styles.css';

function PokeStats ({ pokemon }) {

    function setBarsize (stat) {
        const sizeBar = (stat / 255) * 170;
        const styleBar = {
            width: sizeBar,
        }
    
        return styleBar
    }


    return (
        <>
            <div className="stat-description-container">
                <div className='stat-description'>
                    <span>HP</span>
                    <span>{pokemon.HP}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.HP)}></div>
                    </div>
                </div>
                <div className='stat-description'>
                    <span>ATK</span>
                    <span>{pokemon.ATK}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.ATK)}></div>
                    </div>
                </div>
                <div className='stat-description'>
                    <span>DEF</span>
                    <span>{pokemon.DEF}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.DEF)}></div>
                    </div>
                </div>
                <div className='stat-description'>
                    <span>SATK</span>
                    <span>{pokemon.SATK}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.SATK)}></div>
                    </div>
                </div>
                <div className='stat-description'>
                    <span>SDEF</span>
                    <span>{pokemon.SDEF}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.SDEF)}></div>
                    </div>
                </div>
                <div className='stat-description'>
                    <span>SPD</span>
                    <span>{pokemon.SPD}</span>
                    <div className="stat-bar">
                        <div className='filled-bar' style={setBarsize(pokemon.SPD)}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokeStats;