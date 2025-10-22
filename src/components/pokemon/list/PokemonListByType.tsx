import { useParams } from "react-router"
import useGetPokemonListByType from "../../../hooks/useGetPokemonListByType";
import { Grid } from "../../shared/grid/Grid";
import { PokemonCard } from "../card/PokemonCard";
import React from "react";

export const PokemonTypeList = () => {
    const {typeName} = useParams();
    const {pokemonList} = useGetPokemonListByType(typeName ?? '');

    return (
        <Grid>
            {pokemonList?.map((pokemon) => <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon.pokemon} />)}
        </Grid>
    )
}