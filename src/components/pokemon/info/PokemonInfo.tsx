import React, { useMemo } from 'react';
import { useGetPokemon } from '../../../hooks/usetGetPokemon';
import { useParams } from 'react-router-dom';
import { getMainPokemonType } from '../../../utils/getMainPokemonType';
import { capitalize } from '../../../utils/capitalize';
import { convertInchesToCm, convertLbsToKg } from '../../../utils/convertion';
import { PokemonSprites } from './PokemonSprites';
import { TypeIcons } from '../../shared/typeIcons/TypeIcons';

export const PokemonInfo = () => {
    const { pokemonName } = useParams();
    const { data } = useGetPokemon(pokemonName);
    const mainType = useMemo(() => data && getMainPokemonType(data), [data])

    return (
        <div className='flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg'>
            <div className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}>
                <img src={data?.sprites?.front_default} alt={data?.name} className='mx-auto w-72 h-72' />
            </div>
            <div className='flex flex-col grow p-5 gap-3'>
                <div className='relative'>
                    <h1 className='text-3xl'>{capitalize(data?.name ?? '')}</h1>
                    <TypeIcons types={data?.types ?? []} />
                </div>
                
                <span>{`weight: ${convertLbsToKg(data?.weight ?? 0)} kg`}</span>
                <span>{`height: ${convertInchesToCm(data?.height ?? 0)} cms`}</span>
                <PokemonSprites pokemonName={data?.name ?? ''} />
            </div>
        </div>
    )
}