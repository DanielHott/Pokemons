import { Container, ImageContent, Search } from "./styles"
import { useState } from "react";
import { PokemonsContext } from "../../hooks/pokemonsContext";
import { ImSearch } from 'react-icons/im';


export function Header () {
    const [ name, setName ] = useState(''); 
    const { setPokemonName } = PokemonsContext();
    const changeName = (submition) => {
        submition.preventDefault();
        setPokemonName(name);
    }
    return (
        <Container>
            <ImageContent>
            <img src="pokemon-logo.png" alt="pokemons-logo" height={ "70vh" }/>
            </ImageContent>
            <Search onSubmit={ (e) => changeName(e) }>
            <input onChange={ (e) => setName(e.target.value) }placeholder="Ex: Charmander"></input>
            <button type="submit"><ImSearch /></button>
            </Search>
        </Container>
    )
}