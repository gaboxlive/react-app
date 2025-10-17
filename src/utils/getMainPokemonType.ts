import { IPokemonData } from "../models/Pokemon";

export const getMainPokemonType = (pokemon: IPokemonData) => pokemon.types.find(type => type.slot === 1)?.type.name;