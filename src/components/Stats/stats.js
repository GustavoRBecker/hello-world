import React from "react";
import './styles.css';
import { useState, useEffect } from "react";

function PokeStats ({ pokemon }) {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFilled(true)
        }, 300)
    }, [])

    function setBarsize (stat) {
        const sizeBar = (stat / 255) * 170;
        const styleBar = {
            width: sizeBar,
        }
    
        return styleBar
    }

    const eachStat = [
        {stat: 'HP', statLvl: pokemon.HP, statBar: setBarsize(pokemon.HP)},
        {stat: 'ATK', statLvl: pokemon.ATK, statBar: setBarsize(pokemon.ATK)},
        {stat: 'DEF', statLvl: pokemon.DEF, statBar: setBarsize(pokemon.DEF)},
        {stat: 'SATK', statLvl: pokemon.SATK, statBar: setBarsize(pokemon.SATK)},
        {stat: 'SDEF', statLvl: pokemon.SDEF, statBar: setBarsize(pokemon.SDEF)},
        {stat: 'SPD', statLvl: pokemon.SPD, statBar: setBarsize(pokemon.SPD)}
    ]

    return (
        <>
            <div className="stat-description-container">
                {eachStat.map(item => {
                    return (
                        <div className='stat-description'>
                            <span>{item.stat}</span>
                            <span>{item.statLvl}</span>
                            <div className="stat-bar">
                                <div
                                    className={'filled-bar'}
                                    style={{width: filled ? item.statBar.width : 0}}
                                ></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PokeStats;