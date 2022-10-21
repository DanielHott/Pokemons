import React, { createContext, useState, useContext } from 'react';

const Pokemons = createContext();

export function PokemonsProvider({ children }) {
    const [ pokemonName, setPokemonName] = useState('');
    const [ files, setFiles ] = useState([]);
    const [ isModalOpen , setisModalOpen ] = useState(false);
    const [ modalInfo, setModalInfo ] = useState({});

return (
    <Pokemons.Provider
      value={{
        pokemonName,
        setPokemonName,
        files, 
        setFiles,
        isModalOpen,
        setisModalOpen,
        modalInfo,
        setModalInfo
      }}
    >
      {children}
    </Pokemons.Provider>
  );
}

export function PokemonsContext() {
  const context = useContext(Pokemons);
  const { pokemonName, setPokemonName, files, setFiles, isModalOpen , setisModalOpen, modalInfo, setModalInfo   } = context;
  return { pokemonName, setPokemonName, files, setFiles, isModalOpen , setisModalOpen, modalInfo, setModalInfo   };
}