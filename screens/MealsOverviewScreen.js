import { useLayoutEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find((category) => category.id === categoryId);

    navigation.setOptions({
      title,
    });
  }, [categoryId, navigation]);

  const displayedMeals = useMemo(() => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)), [categoryId]);

  return (
    <View style={styles.container}>
      <MealsList items={displayedMeals} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});