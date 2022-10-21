import { useEffect } from 'react';
import { ImageContent, DiscoveredPokemons,EachPokemon  } from './styles';
import { PokemonsContext } from '../../hooks/pokemonsContext';
import { searchPokemons, searchPokemonsEvoId, searchPokemonsEvoName } from '../../utils/searchPokemons';

export function Cards () {
    const { pokemonName, setisModalOpen, files, setFiles, isModalOpen, setModalInfo } = PokemonsContext();
    useEffect(() => {
        setFiles([]);
        async function getPokemons(pokemonName){
            try {
              const pokemons = searchPokemons(pokemonName);
              return pokemons;
            } catch (err) {
              console.error(err);
              return [];
            }
          }
        async function getPokemonsEvoId(id){
            try {
              const pokemons = searchPokemonsEvoId(id);
              return pokemons;
            } catch (err) {
              console.error(err);
              return [];
            }
          }
          async function getPokemonsEvoName(url){
            try {
              const pokemons = searchPokemonsEvoName(url);
              return pokemons;
            } catch (err) {
              console.error(err);
              return [];
            }
          }
        if(pokemonName !== '') {
            try {
           getPokemons(pokemonName).then((pokemon) => {
            setFiles(files => [...files, pokemon])
            getPokemonsEvoId(pokemon.id).then((evolutions) => { 
            getPokemonsEvoName(evolutions.evolution_chain.url).then((pokemonsName) => {
                    const finalEvo = pokemonsName.chain.evolves_to.map((evolution) => evolution.evolves_to.map((names) => names.species.name))
                    const firstEvo = pokemonsName.chain.evolves_to.map((evolution) => evolution.species.name)
                    if(pokemonName !== firstEvo[0]) getPokemons(firstEvo[0]).then((pokemon) =>  pokemon && setFiles( files =>  [...files, pokemon]))
                    if(pokemonName !== finalEvo[0][0]) getPokemons(finalEvo[0][0]).then((pokemon) =>  pokemon && setFiles(files =>  [...files, pokemon]))
            }) 
          })
        })
    }  catch (err) {
        console.error(err);
        return [];
      }
        }
    }, [pokemonName]);

    if(pokemonName === '') {
        return (
            <ImageContent>
                <img src={"/Charmander.png"} alt="Charmander" height={"100vh"} />
                <h4>Você ainda não pesquisou nenhum pokemon!</h4>
            </ImageContent>
        )
    }
    if(files.length < 1 || !files[0]) {
        return (
            <ImageContent>
                <img src={"/Charmander.png"} alt="Charmander" height={"100vh"} />
                <h4>Fiz o meu melhor, mas não encontrei esse Pokemon! :(</h4>
            </ImageContent>
        )
    }
    const settingInfo = (pokemonInfo) => {
        setModalInfo({});
        setModalInfo(pokemonInfo);
        setisModalOpen(isModalOpen ? false :  true);
    }
    if(files.length > 0 && files[0] !== undefined) {
    return (
        <DiscoveredPokemons>
            {  
               files.length > 0 && files.map((pokemon) => { 
                if(pokemon) {
                    return (
                        <EachPokemon onClick={() => {
                            settingInfo(pokemon);
                            }}>
                            <img src={pokemon.sprites.front_default} alt="pokemon" width={"150px"} />
                            <h3>{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</h3>
                        </EachPokemon>
                    )}
                }) 
            }
        </DiscoveredPokemons>
    )
    }
}