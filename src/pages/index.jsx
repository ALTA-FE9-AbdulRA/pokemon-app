
import { useState, useEffect } from "react";
import  {WithRouters}  from "utils/Navigations";
import "styles/App.css";
import Container from "components/Layout";
import PokeThumbnails from "components/PokeThumbnails";

function App(props) {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState (
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch (
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect (() => {
    getAllPokemons();
  }, []);

  return (
      <Container>
          <section className="w-full flex flex-col">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-4 my-4">
                {allPokemons.map((pokemon, index) => (
                  <PokeThumbnails
                    id={pokemon.id}
                    name={pokemon.name}
                    images={pokemon.sprites.other.dream_world.front_default}
                    key={index}
                  />
                ))}
              </div>
              <button className="load-more" onClick={() => getAllPokemons()}>Load More</button>
          </section>
      </Container>
  )
};

export default WithRouters(App);