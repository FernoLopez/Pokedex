import { useState, useEffect } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokeInfo from "./Components/PokeInfo/PokeInfo";
import ProtectedRoutes from "./Components/Router/ProtectedRoutes";
import Login from "./Components/Login/Login";
import NavBar from "./Components/Router/NavBar";

function App(){
  
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home setIsLogged={setIsLogged} />}>
        </Route>
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/pokedex" element={<Pokedex />}>
          </Route>
          <Route path="/pokedex/:id" element={<PokeInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
