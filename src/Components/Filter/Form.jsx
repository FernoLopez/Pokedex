import React from 'react'
import './Form.css'
/* import { useForm } from 'react-hook-form' */

const Form = ({setPokeSearch, typeList, setFilterType}) => {

    const changeInputText = e => {
        setPokeSearch(e.target.value)
    }

    const changeSelect = e => {
      setFilterType(e.target.value)
    }

  return (
    <form className='input-position'>
        <input className='text_input'
        type='text' 
        placeholder='Search your pokemon' 
        onChange={changeInputText}/>
       <select className='text_form' onChange={changeSelect}>
        <option value='All Pokemons'>All Pokemons</option>
          {
          typeList?.map(type => (
            <option key={type.name} value={type.name}>{type.name}</option>
          ))
        }
       </select>
    </form>
  )
}

export default Form