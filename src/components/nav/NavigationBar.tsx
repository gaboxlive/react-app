import React from 'react';
import { Link } from 'react-router-dom';
import pokeball from '../../assets/pokeball.png';
import { SearchButton } from '../shared/button/SearchButton';

const NavigationBar: React.FC = () => (
    <nav className='w-full bg-yellow-400 flex justify-between h-12 items-center shadow-lg'>
        <div className='mx-auto flex justify-between items-center w-9/12'>
            <Link to={'/'}>
                <img src={pokeball} alt="Poke logo" className='w-10 h-10' />
            </Link>
            <div className='flex gap-5 items-center'>
                <Link to={'/'} className='text-black hover:text-white'>
                    Pokedex
                </Link>
                <Link to={'/favorite'} className='text-black hover:text-white'>
                    Favoritos
                </Link>
                <SearchButton />
            </div>
        </div>
    </nav>
);

export default NavigationBar;