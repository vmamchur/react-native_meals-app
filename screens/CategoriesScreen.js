import { FlatList, View } from "react-native";

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const categoryPressHandler = (categoryId) => {
    navigation.navigate('MealsOverview', {
      categoryId,
    });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={() => categoryPressHandler(item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;