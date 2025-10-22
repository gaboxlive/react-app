import React from 'react';
import { useNavigate } from 'react-router';
import { IPokemonType } from '../../../models/Pokemon';
import { mapTypeToIcon } from '../../../utils/maptypeicons';

interface TypeIconsProps {
    types: IPokemonType[];
}

export const TypeIcons: React.FC<TypeIconsProps> = ({types}) => {
    const navigate = useNavigate();

    const navigateToType = (type: IPokemonType) => navigate(`/type/${type.type.name}`);

    return (
        <div className='absolute top-2- right-2 gap-2 cursor-pointer'>
            {types.map((type) => (
                <div key={type.type.name} className='bg-white p-1 rounded-full w-6 h-6 mb-1' onClick={() => navigateToType(type)}>
                    <img src={mapTypeToIcon(type)} alt={`${type.type.name} icon`} />
                </div>
            ))}
        </div>
    )
}