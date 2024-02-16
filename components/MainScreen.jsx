import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MainScreen = () => {
  const [payload, setPayload] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();

    return json;
  };

  useEffect(() => {
    getData().then((ress) => {
      setPayload(ress);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data:</Text>
      <FlatList
        data={payload}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={{width :100,height:100}} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    aspectRatio: 1, // This ensures each item has a square aspect ratio
    borderRadius: 10,
    overflow: "hidden", // This prevents the image from overflowing the item
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    color: "black",
  },
});
