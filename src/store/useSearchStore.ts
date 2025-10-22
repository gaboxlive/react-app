import { create } from 'zustand';

interface SearchStore {
    isOpen: boolean;
    filter: string;
    currentSearch: string;
    setFilter: (filter: string) => void;
    setCurrentSearch: (currentSearch: string) => void;
    openModal: () => void;
    closeModal: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    filter: '',
    currentSearch: '',
    setFilter: (filter: string) => set({ filter: filter }),
    setCurrentSearch: (currentSearch: string) => set ( {currentSearch: currentSearch} ),
    openModal: () => set({ isOpen: true, filter: '', currentSearch: '' }),
    closeModal: () => set({ isOpen: false }),
}))