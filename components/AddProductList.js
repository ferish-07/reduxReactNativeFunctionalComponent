import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reduxApp/actions/ProductAction";
import { TextInput } from "react-native-paper";

export default function AddProductList({ navigation }) {
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addPr = () => {
    product.push({
      id: id,
      name: name,
    });

    console.log("pppp", product);
    dispatch(addProduct(product));

    // dispatch(addProduct(product));
    // //  props.AddProduct(product);
    // setProduct({ ProductId: 0, ProductName: "" });
    // navigation.navigate("ListProduct");
    navigation.navigate("ListProduct");
  };
  const navi = () => {};
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: "2%", flex: 1 }}>
        <Text>ID:</Text>
        <TextInput placeholder="Product Id" onChangeText={(id) => setId(id)} />
      </View>
      <View style={{ marginTop: "2%", flex: 2 }}>
        <Text>Name:</Text>
        <TextInput
          placeholder="Product Name"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View
        style={{
          //   backgroundColor: "red",

          width: "100%",
          alignItems: "center",
        }}>
        <TouchableOpacity style={{}} onPress={() => addPr()}>
          <Text style={{ fontSize: 24 }}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
