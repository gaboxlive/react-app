import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/url";
import { IPokemonData } from "../models/Pokemon";

export const useGetPokemon = (pokemonName?: string, pokemonId?: number) => {
    const {data, isLoading, error} = useQuery<IPokemonData>({
        queryKey: ['pokemon', pokemonName, pokemonId],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}pokemon/${pokemonName ?? pokemonId}`);
            if (!response.ok) {
                throw new Error("No response");
            }
            const data = await response.json();
            return data;
        }
    })

    return { data, isLoading, error: error?.message == null };
}