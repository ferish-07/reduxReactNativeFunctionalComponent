import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssetExample from "../AssetExample";
// import A from "../AddProductList";
import AddProductList from "../AddProductList";
import ListProduct from "../ListProduct";

const Stack = createNativeStackNavigator();
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator navigationOption>
        <Stack.Screen name="ListProduct" component={ListProduct} />
        <Stack.Screen name="AddProductList" component={AddProductList} />

        {/* <Stack.Screen name="Home" component={AssetExample} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
