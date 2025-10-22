import React, { useState } from "react";
import { useGetPokemon } from "../../hooks/usetGetPokemon";
import ReactModal from "react-modal";
import { PokemonCard } from "../pokemon/card/PokemonCard";
import { useSearchStore } from "../../store/useSearchStore";
import { useShallow } from "zustand/react/shallow";

export const SearchModal: React.FC = () => {
  const [isOpen, filter, currentSearch, setFilter, setCurrentSearch, closeModal] = useSearchStore(
    useShallow((state) => [state.isOpen, state.filter, state.currentSearch, state.setFilter, state.setCurrentSearch, state.closeModal])
  );
  const { data } = useGetPokemon(currentSearch);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(event.target.value);

  const onSearch = () => setCurrentSearch(filter.toLowerCase());

  const handleCloseModal = () => {
    setFilter("");
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={
        "w-6/12 h-6/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"
      }
    >
      <h6>Búsqueda</h6>
      <input type="text" value={filter} onChange={handleInputChange} className="border p-2" />
      <button onClick={onSearch}>Buscar...</button>
      {data?.id && <PokemonCard pokemonId={data.id} />}
    </ReactModal>
  );
};
