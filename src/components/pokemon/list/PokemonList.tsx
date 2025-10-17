import React from 'react';
import { useGetPokemonList } from '../../../hooks/useGetPokemonList';
import { PokemonCard } from '../card/PokemonCard';

const PokemonList: React.FC = () => {
    const {pokemonList, goToNextPage, goToPreviousPage} = useGetPokemonList();
    return <div>
        {pokemonList?.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
    </div>
}

export default PokemonList;