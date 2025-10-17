export interface IPokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

export interface IPokemonSprites {
    front_default?: string;
    back_default?: string;
    front_shiny?: string;
    back_shiny?: string;
}

export interface IPokemonData {
    name: string;
    id: number;
    heigth: number;
    weight: number;
    types: IPokemonType[];
    sprites?: IPokemonSprites;
}