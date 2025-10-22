import React from 'react';
import { useGetPokemon } from '../../../hooks/usetGetPokemon';

interface PokemonSpritesProps {
    pokemonName?: string;
}

export const PokemonSprites: React.FC<PokemonSpritesProps> = ({pokemonName}) => {
    const {data} = useGetPokemon(pokemonName);

    return (
        <div className='flex flex-row'>
            <div>
                <h6 className='text-2xl text-center'>Normal</h6>
                <div className='flex'>
                    <img src={data?.sprites?.front_default} alt={data?.name ?? ''} className='mx-auto' />
                    <img src={data?.sprites?.back_default} alt={data?.name ?? ''} className='mx-auto' />
                </div>
            </div>
            <div>
                <h6 className='text-2xl text-center'>Shiny</h6>
                <div className='flex'>
                    <img src={data?.sprites?.front_shiny} alt={data?.name ?? ''} className='mx-auto' />
                    <img src={data?.sprites?.back_shiny} alt={data?.name ?? ''} className='mx-auto' />
                </div>
            </div>
        </div>
    )
}