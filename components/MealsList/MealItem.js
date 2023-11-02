import { useCallback } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../MealDetails";

function MealItem({ meal }) {
  const navigation = useNavigation();

  const { id, title, imageUrl, duration, complexity, affordability } = meal;

  const mealPressHandler = useCallback(() => navigation.navigate('MealDetails', { mealId: id }), [id, navigation]);

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={mealPressHandler} android_ripple={{ color: '#cccccc' }}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
})