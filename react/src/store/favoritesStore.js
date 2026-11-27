import { create } from "zustand";

export const useFavoritesStore = create((set, get) => ({
  // Estado
  favorites: [],

  // Acciones
  addFavorite: (serviceId) => {
    set((state) => ({
      favorites: state.favorites.includes(serviceId)
        ? state.favorites
        : [...state.favorites, serviceId],
    }));
  },

  removeFavorite: (serviceId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== serviceId),
    }));
  },

  isFavorite: (serviceId) => {
    return get().favorites.includes(serviceId);
  },

  toggleFavorite: (serviceId) => {
    const { addFavorite, removeFavorite, isFavorite } = get();
    const isFav = isFavorite(serviceId);
    isFav ? removeFavorite(serviceId) : addFavorite(serviceId);
  },

  countFavorites: () => {
    return get().favorites.length;
  }
}));
