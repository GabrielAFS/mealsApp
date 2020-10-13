import React, { useState } from "react";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens"; // Versões mais recentes do expo e do react native
// import { useScreens } from 'react-native-screens';
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import store from "./store";

import Colors from './constants/colors';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
    </Provider>
  );
}
