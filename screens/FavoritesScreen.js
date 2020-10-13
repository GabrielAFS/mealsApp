import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite meals found. Starting adding some!
        </DefaultText>
      </View>
    )
  }

  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default FavoritesScreen;
