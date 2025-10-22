import React from 'react'
import { Route, Routes } from 'react-router';

const Pokedex = React.lazy(() => import('../views/Pokedex'));
const PokemonProfile = React.lazy(() => import('../views/PokemonProfile'));
const PokemonByType = React.lazy(() => import('../views/PokemonType'));
const FavoritePokemon = React.lazy(() => import('../views/FavoritePokemon'));

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <Pokedex />
            </React.Suspense>
        }>
        </Route>
        <Route path="/pokemon/:pokemonName" element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <PokemonProfile />
            </React.Suspense>
        }>
        </Route>
        <Route path="/type/:typeName" element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <PokemonByType />
            </React.Suspense>
        }>
        </Route>
        <Route path="/favorite" element={
            <React.Suspense fallback={<div>Loading...</div>}>
                <FavoritePokemon />
            </React.Suspense>
        }>
        </Route>
    </Routes>
);

export default AppRoutes;