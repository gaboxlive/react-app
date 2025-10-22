import React from "react";
import { useSearchStore } from "../../../store/useSearchStore"
import { useShallow } from "zustand/react/shallow";

export const SearchButton = () => {
    const openModal = useSearchStore(useShallow((state) => state.openModal));
    return <button onClick={openModal} className='text-black hover:text-white hover:cursor-pointer'>Búscar</button>
}