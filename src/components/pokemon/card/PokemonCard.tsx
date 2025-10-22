import { useGetPokemon } from "../../../hooks/usetGetPokemon";
import { IPokemon } from "../../../models/Pokemon";
import React, { useMemo } from 'react';
import { getMainPokemonType } from "../../../utils/getMainPokemonType";
import { Label } from "../../shared/label/Label";
import { capitalize } from "../../../utils/capitalize";
import { FavoriteButton } from "../../shared/button/favButton";
import { useNavigate } from "react-router";
import { TypeIcons } from "../../shared/typeIcons/TypeIcons";
import { useSearchStore } from "../../../store/useSearchStore";

interface PokemonCardProps {
    pokemon?: IPokemon;
    pokemonId?: number;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
    const closeModal = useSearchStore((state) => state.closeModal);
    const { data } = useGetPokemon(pokemon?.name, pokemonId);
    const mainType = useMemo(() => data && getMainPokemonType(data), [data]);
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/pokemon/${data?.name}`);
        closeModal();
    }

    return (
        <div className={`${mainType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}>
            <FavoriteButton pokemonId={data?.id ?? 0} />
            <TypeIcons types={data?.types ?? []} />
            <div className="flex flex-col items-center mx-auto" onClick={navigateTo}>
                <Label>{data?.name ? capitalize(data.name) : '' }</Label>
                <img className="mx-auto w-40 h-40" src={data?.sprites?.front_default} alt={data?.name ?? ''} />
            </div>
        </div>
    )
}