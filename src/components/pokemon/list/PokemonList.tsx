import React from 'react';
import { useGetPokemonList } from '../../../hooks/useGetPokemonList';
import { PokemonCard } from '../card/PokemonCard';
import { Grid } from '../../shared/grid/Grid';

const PokemonList: React.FC = () => {
    const {pokemonList, goToNextPage, goToPreviousPage} = useGetPokemonList();
    return (
        <Grid goToNext={goToNextPage} goToPrev={goToPreviousPage}>
            {pokemonList?.map((pokemon) => (
                <div key={pokemon?.name}>
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                </div>
            ))}
        </Grid>
    )
}

export default PokemonList;