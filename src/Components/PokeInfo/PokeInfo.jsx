import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './PokeInfo.css'

const PokeInfo = () => {

    const [pokemonInfo, setPokemonInfo] = useState()

    const {id} = useParams()

    console.log(id)

    useEffect(() => {
      const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
      axios.get(URL)
      .then((response) => {
        setPokemonInfo(response.data)
      })
      .catch((error) => console.log(error))

    }, [])

    console.log(pokemonInfo)
    

  return (
    <div className='body_info'>
    <article className='pokeinfo-container'>
        <section className='info_poke'>
        <h2 className='info_title'>{pokemonInfo?.name}</h2>
        <img src={pokemonInfo?.sprites.other['official-artwork'].front_default} alt="pke" className='pkm_img'/>
        <ul className='info_character'>
        <li><b>Height: </b>{Math.round(pokemonInfo?.height * 3.9)}"</li>
        <li><b>Weight: </b>{Math.round(pokemonInfo?.weight / 4.3)} lbs</li>
        <li><b>Number of battles: </b>{pokemonInfo?.game_indices.length}</li>
        </ul>
        </section>
        <ul id = "limheight" className='moves_info'>
           
                {
                    pokemonInfo?.moves.map(move => (
                        <li key={move.move.url}>{move.move.name}</li>
                        ))
                }
           
        </ul>
    </article>
    </div>
  )
}

export default PokeInfo