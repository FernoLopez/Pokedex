import React from 'react'
import InputHome from './InputHome'
import './Home.css'

const Home = ({setIsLogged}) => {

    setIsLogged(true);
  
  return (
    <div className='body'>
    <h1></h1>
    <InputHome />
    </div>
  )
}

export default Home