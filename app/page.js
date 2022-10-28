import { gql } from "@apollo/client";
import PokemonGrid from "./PokemonGrid";
import client from "./provider/ApolloProvider";

async function fetchPokemon() {
  const { data } = await client.query({
    query: gql`
      query fetchAllPokemonNamesAndSprites {
        pokemon_v2_pokemon{
          name
          pokemon_species_id
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
            name
          }
        }
      }
    }
    `,
  })

  return data
}


export default async function Page() {

  const data = await fetchPokemon();

  return (
    <div className="py-[15px] px-[45px]">
      <PokemonGrid data={data} />
    </div>
  );
}
