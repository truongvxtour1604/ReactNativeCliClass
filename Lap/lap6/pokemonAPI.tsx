// pokemon.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonType {
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    sprites: {
      front_default: string;
    };
  }  

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: builder => ({
        getPokemonByName: builder.query<PokemonType, string>({
            query: name => `pokemon/${name}`,
        }),
    }),
});

export const { useLazyGetPokemonByNameQuery } = pokemonApi;
