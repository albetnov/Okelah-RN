import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Data from "";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.propicContainer}
        onPress={() => navigation.navigate("About")}
      >
        <Image source={require("./asset/profile.png")} style={styles.propic} />
      </TouchableOpacity>
      <View>
        <FlatList data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  propicContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    maxWidth: 140,
    borderRadius: 50,
    marginLeft: -30,
    alignItems: "flex-end",
  },
  propic: {
    width: 50,
    height: 50,
  },
});
