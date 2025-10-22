import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "../constants/url"
import { IPokemon } from "../models/Pokemon";

interface Pokemon {
    pokemon: IPokemon;
}

interface TypeListInfo {
    pokemon: Pokemon[];
}

const useGetPokemonListByType = (typeName: string) => {
    const {data, isLoading, error} = useQuery<TypeListInfo>({
        queryKey: ['pokemonListByType', typeName],
        queryFn: async() => {
            const response = await fetch(`${BASE_URL}type/${typeName}`);
            if (!response.ok) {
                throw new Error("error en el api");
            }
            return response.json();
        }
    });

    return {
        pokemonList: data?.pokemon ?? [],
        isLoading,
        error: error?.message ?? null,
    }
}

export default useGetPokemonListByType;