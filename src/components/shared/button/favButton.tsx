import React, {useMemo} from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import { useFavoriteStore } from '../../../store/useFavoriteStore';
import { useShallow } from 'zustand/react/shallow';

interface FavoriteButtonProps {
    pokemonId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ pokemonId }) => {
    const [favorites, addFavorite, deleteFavorite] = useFavoriteStore(useShallow((state) => [state.favorites, state.addFavorite, state.deleteFavorite]));

    const isFavorite = useMemo(() => favorites.includes(pokemonId.toString()), [favorites, pokemonId]);

    const favoriteClick = () => {
        const idToModify = pokemonId.toString();
        isFavorite ? deleteFavorite(idToModify) : addFavorite(idToModify);
    }

    return (
        <button className='bg-white p-1 rounded-full absolute top-2 left-2' onClick={favoriteClick}>
            {isFavorite ? <FaHeart fill='#EF4444' /> : <FaRegHeart fill='#EF4444' /> }
        </button>
    );
}