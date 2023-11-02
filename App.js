import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import { store } from './store/redux/store';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401',
      },
      headerTintColor: '#ffffff',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: '#ffffff',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e3baa1'
    }}>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: '#ffffff',
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer >
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
