import { useGetPokemon } from "../../../hooks/usetGetPokemon";
import { IPokemon } from "../../../models/Pokemon";
import React, { useMemo } from 'react';
import { getMainPokemonType } from "../../../utils/getMainPokemonType";

interface PokemonCardProps {
    pokemon?: IPokemon;
    pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
    const { data } = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => data && getMainPokemonType(data), [data]);


    return (
        <div className={`${mainType}-background w-56 h-56 rounded-lg shadow-lg p-4`}>
            <div className="flex flex-col items-center mx-auto">
                <span>{data?.name ?? ''}</span>
                <img className="mx-auto w-40 h-40" src={data?.sprites?.front_default} alt={data?.name ?? ''} />
            </div>
        </div>
    )
}