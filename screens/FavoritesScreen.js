// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (!favoriteMeals.length) {
    return (
      <View style={styles.noFavorites}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  noFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  container: {
    flex: 1,
    padding: 16,
  }
});