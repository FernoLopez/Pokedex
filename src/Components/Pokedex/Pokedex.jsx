import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CharactersCards from "./CharactersCards";
import Form from "../Filter/Form";
import { Outlet } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import './Pokedex.css'

const Pokedex = () => {
  const infoUser = useSelector((state) => state.infoUser);

  const [characters, setCharacters] = useState();
  const [pokeSearch, setPokeSearch] = useState();
  const [filterPokemon, setFilterPokemon] = useState();
  const [typeList, setTypeList] = useState();
  const [filterType, setFilterType] = useState("All Pokemons");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filterType === "All Pokemons") {
      const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151/";
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!pokeSearch) {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`;
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data.pokemon);
          const array = res.data.pokemon.map((e) => e.pokemon);
          setCharacters(array);
        })
        .catch((error) => console.log(error));
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`;
      axios.get(URL);
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [filterType, pokeSearch]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";
    axios
      .get(URL)
      .then((res) => {
        setTypeList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Se agrega el If para que no se rompa el código cuando se borra la información del input
    if (pokeSearch) {
      setFilterPokemon(
        characters?.filter((e) => e.name.includes(pokeSearch.toLowerCase()))
      );
    } else {
      setFilterPokemon();
    }
  }, [pokeSearch]);

  /*  if (loading) {
    return <h2>Loading...</h2>;
  }  */
  // EMPIEZA EL CÓDIGO DE BENJAMIN
  let arrayPivot;

  if (filterPokemon) {
    arrayPivot = filterPokemon;
  } else {
    arrayPivot = characters;
  }

  console.log(arrayPivot);
  // TERMINA EL CÓDIGO DE BENJAMIN
  
  let arrayPokemons = [];
  const pokemonsPerPage = 6;
  // SE CAMBIA CHARACTER POR ARRAY PIVOT
  if (arrayPivot?.length < pokemonsPerPage) {
    // SE CAMBIA CHARACTER POR ARRAY PIVOT
    arrayPokemons = [...arrayPivot];
  } else {
    const lastPokemon = currentPage * pokemonsPerPage;
    arrayPokemons = characters?.slice(
      lastPokemon - pokemonsPerPage,
      lastPokemon
    );
  }

  let arrayPages = [];
  // SE CAMBIA CHARACTER POR ARRAY PIVOT
  let quantityPages = Math.ceil(arrayPivot?.length / pokemonsPerPage);
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage / pagesPerBlock);
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
  } else {
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }
  /* console.log(arrayPages) */

  return (
    <article className="body_pokedex">
      {/* <Outlet /> */}
      <h2 className="user_title">Hi {infoUser}, welcome to pokedex! </h2>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <Form
        setPokeSearch={setPokeSearch}
        typeList={typeList}
        setFilterType={setFilterType}
      />
      {filterPokemon
        ? filterPokemon?.map((pokemon) => (
            <CharactersCards key={pokemon.url} url={pokemon.url} />
          ))
        : arrayPokemons?.map((pokemon) => (
            <CharactersCards key={pokemon.url} url={pokemon.url} />
          ))}
    </article>
  );
};

export default Pokedex;
