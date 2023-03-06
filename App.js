import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import store from "./reduxApp/Store/Store";

// You can import from local files
// import AssetExample from "./components/AssetExample";
import Route from "./components/Route/Route";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
