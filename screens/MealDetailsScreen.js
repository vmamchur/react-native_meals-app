import { useCallback, useLayoutEffect, useMemo } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;

  const selectedMeal = useMemo(() => MEALS.find((meal) => meal.id === mealId), [mealId]);
  const isMealFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (isMealFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }, [isMealFavorite, mealId, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => <IconButton onPress={changeFavoriteStatusHandler} icon={isMealFavorite ? 'star' : 'star-outline'} color="#ffffff" />
    });
  }, [selectedMeal, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  root: {
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
  detailText: {
    color: '#ffffff'
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  }
});