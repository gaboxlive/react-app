import { useParams } from "react-router-dom"
import useGetPokemonListByType from "../../../hooks/useGetPokemonListByType";
import { Grid } from "../../shared/grid/Grid";
import { PokemonCard } from "../card/PokemonCard";
import React from "react";

export const PokemonTypeList = () => {
    console.log("llllll")
    const {typeName} = useParams();
    const {pokemonList} = useGetPokemonListByType(typeName ?? '');
    return (
        <Grid>
            {pokemonList?.map((pokemon) => <PokemonCard key={pokemon?.pokemon.url} pokemon={pokemon.pokemon} />)}
        </Grid>
    )
}