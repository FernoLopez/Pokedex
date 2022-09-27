import React from 'react'
/* import { useSelector } from 'react-redux' */
/* import InputHome from './InputHome' */
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import pokeball from '../Assets/8-82928_open-pokeball-png-transparent-png.png'
import './Pokedex.css'

const CharactersCards = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const clickCard = () => navigate(`/pokedex/${pokemon.id}`)

    console.log(pokemon)  

  return (
    <article className='pokedex_container'>
    <section onClick={clickCard} className='card-pokemon'>
      <div className="poke">
  <img className="poke-profile-img" src={pokemon?.sprites.other['official-artwork'].front_default} alt=""/>
  <div className="poke-description-bk"></div>
  <div className="poke-description">
    <p>{pokemon?.name}</p>
  </div>
  <div  className="poke-type">
    <p><b>Type: </b>{pokemon?.types[0].type.name}</p>
  </div>
  <div className="poke-logo">
    <img src={pokeball} alt=""/>
  </div>
</div>
    </section>
    </article>
  )
}

export default CharactersCards