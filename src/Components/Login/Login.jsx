import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Assets/wallpapersden.com_red-and-pikachu-pokemon_1920x1080.jpg'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const clickLogged = () => {
    /* setIsLogged(true)  */
    navigate('/Home')
    }
  return (
    <div className='body'>
    <article className='login_container'>
        <h2 className='login_title'>Welcome</h2>
        <img className='user-style' src={image} alt='user_image'/>
        <button className='login_btn' onClick={clickLogged}>Catch'em Pokemons!</button>
    </article>
    </div>
  )
}

export default Login