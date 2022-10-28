"use client";

import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard/Card";
import { filterBy, orderBy } from "./utils";

export default function PokemonGrid({ data }) {
  const [pokemon, setPokemon] = useState(orderBy(filterBy(data.pokemon_v2_pokemon, "none"), 'name', "A-Z"));
  const [order, setOrder] = useState('A-Z')
  const [filter, setFilter] = useState('none')

  useEffect(() => {
    setPokemon(orderBy(filterBy(data.pokemon_v2_pokemon, filter), 'name', order))
  }, [order, filter])

  const changeDirection = (e) => {
    console.log("changeDirection", e.target.value);
    setOrder(() => e.target.value)
  }

  const changeFilter = (e) => {
    setFilter(e.target.value)
  }




  return (
    <div>
      <div className="flex justify-between gap-x-20">
        <div className="w-full flex flex-col gap-x-10">
          <label htmlFor="order">Sort ({order})</label>
          <select
            className="flex justify-center items-center font-[500] text-gray-400"
            onChange={changeDirection}
            id="order"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-x-10">
          <label htmlFor="type">Type</label>
          <select
            className="flex justify-center items-center font-[500] text-gray-400"
            onChange={changeFilter}
            id="type"
          >
            <option value="none">All</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="fairy">Fairy</option>
            <option value="steel">Steel</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="ghost">Ghost</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="psychic">Psychic</option>
            <option value="flying">Flying</option>
            <option value="ground">Ground</option>
            <option value="poison">Poison</option>
            <option value="fighting">Fighting</option>
            <option value="ice">Ice</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="normal">Normal</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-[1rem] gap-y-10 my-[25px]">
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name + pokemon.pokemon_species_id} info={pokemon} />
        ))}
      </div>
    </div >
  )
}
