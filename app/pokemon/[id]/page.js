import { gql } from "@apollo/client"
import client from "../../provider/ApolloProvider"

export default async function PokemonById({ params }) {
  const { id } = params

  async function getPokemonById() {
    const { data } = await client.query({
      query: gql`
        {
          pokemon_v2_pokemon_by_pk(id: ${id}) {
              name
              base_experience
              height
              is_default

              pokemon_v2_pokemonsprites {
                sprites
              }
          }
        }`,
    })

    return data
  }

  const data = await getPokemonById()
  return (
    <div>
      {data.pokemon_v2_pokemon_by_pk.name}
    </div>
  )
}
