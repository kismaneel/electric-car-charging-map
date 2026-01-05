import { StationDTO } from "@/api/ev/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
    favorites: StationDTO[];
};

type Actions = {
    addFavorite: (station: StationDTO) => void;
    removeFavorite: (stationId: StationDTO) => void;
    resetFavorites: () => void;
};

const initialState: State = {
    favorites: [],
};

export const useFavoriteStore = create<State & Actions>()(
    persist(
        (set) => ({
            ...initialState,
            addFavorite: (station: StationDTO) => {
                set((state) => ({
                    favorites: [...state.favorites, station],
                }));
            },
            removeFavorite: (station: StationDTO) => {
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