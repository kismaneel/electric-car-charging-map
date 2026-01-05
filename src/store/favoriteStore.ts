import { Station } from "@/api/ev/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
    favorites: Station[];
};

type Actions = {
    addFavorite: (station: Station) => void;
    removeFavorite: (stationId: Station) => void;
    resetFavorites: () => void;
};

const initialState: State = {
    favorites: [],
};

export const useFavoriteStore = create<State & Actions>()(
    persist(
        (set, get) => ({
            ...initialState,
            addFavorite: (station: Station) => {
                set((state) => ({
                    favorites: [...state.favorites, station],
                }));
            },
            removeFavorite: (station: Station) => {
                set((state) => ({
                    favorites: state.favorites.filter((fav) => fav.cpId !== station.cpId),
                }));
            },
            resetFavorites: () => set(initialState),
        }),
        {
            name: "favorite-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useFavoriteStore;