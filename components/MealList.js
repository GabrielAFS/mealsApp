import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItem from './MealItem';

const MealList = (props) => {
  const favoriteMeals = useSelector(
    state => state.meals.favoriteMeals
  )

  const renderMealItem = ({ item }) => {
    const isFavorite = favoriteMeals.some(
      meal => meal.id === item.id
    )

    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFavorite: isFavorite
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "90%",
  },
});


export default MealList;