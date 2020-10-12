import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

import { isNewestAndroid } from '../utils'

const CategoryGridTitle = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (isNewestAndroid()) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        style={{ flex: 1 }}
        onPress={props.onSelect}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.color },
          }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // Com overflow: hidden, a sombra não aparece no iOS
    overflow: isNewestAndroid() ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTitle;
