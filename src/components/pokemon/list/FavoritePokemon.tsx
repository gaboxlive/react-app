import React from "react";
import { useFavoriteStore } from "../../../store/useFavoriteStore"
import { Grid } from "../../shared/grid/Grid";
import { PokemonCard } from "../card/PokemonCard";

export const FavoritePokemonList = () => {
    const favorites = useFavoriteStore((state) => state.favorites);

    return (
        <Grid>
            {favorites.map((favorite) => <PokemonCard key={favorite} pokemonId={Number(favorite)} />)}
        </Grid>
    )
}