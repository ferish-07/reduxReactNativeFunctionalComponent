import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
// import { Button } from "react-native-paper";

export default function ListProduct({ navigation }) {
  let products = useSelector((state) => state.ProductReducers.listProduct);

  console.log("PRODUCTSSSS IADVJSBD", products);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          // backgroundColor: "red",
          alignSelf: "center",
          // bottom: 0,
        }}
        onPress={() => navigation.navigate("AddProductList")}>
        <Text>GO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
