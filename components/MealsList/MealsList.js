import { FlatList } from "react-native";

import MealItem from "./MealItem";

function MealsList({ items }) {
  return (
    <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
          />
        )}
      />
  );
}

export default MealsList;