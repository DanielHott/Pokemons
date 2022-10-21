import axios from "axios";

export const searchPokemons = async (pokemon) => {
    try {
    const convertedPokemon = pokemon.toLowerCase();
    const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${convertedPokemon}`).then((resp) => resp.data);
    return resultado;
    }
    catch (error) {
        console.error('Algo deu errado');
    }
};

export const searchPokemonsEvoId = async (pokemonId) => {
    try {
    const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`).then((resp) => resp.data);
    return resultado;
    }
    catch (error) {
        console.error('Algo deu errado');
    }
};

export const searchPokemonsEvoName = async (url) => {
    try {
    const resultado = await axios.get(url).then((resp) => resp.data);
    return resultado;
    }
    catch (error) {
        console.error('Algo deu errado');
    }
};