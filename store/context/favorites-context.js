import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  toggleFavorite: () => {},
  isFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const isFavorite = (id) => favoriteMealIds.includes(id);

  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      setFavoriteMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
    } else {
      setFavoriteMealIds((currentIds) => [...currentIds, id]);
    }
  }

  const value = {
    ids: favoriteMealIds,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;