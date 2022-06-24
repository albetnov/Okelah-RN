import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header = ({ type }) => {
  if (type == "anime") {
    return (
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require("../Screens/asset/anime.jpg")}
        />
        <View style={styles.imgTint}></View>
        <Text style={styles.headerText}>Anime</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require("../Screens/asset/couple.jpg")}
        />
        <View style={styles.imgTint}></View>
        <Text style={styles.headerText}>Couple Charts</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
  },
  headerImg: {
    height: 200,
    width: 300,
    borderRadius: 30,
    resizeMode: "cover",
    opacity: 100,
  },
  imgTint: {
    position: "absolute",
    height: 200,
    width: 300,
    borderRadius: 30,
    backgroundColor: "rgba(30, 136, 229, 0.5)",
  },
  headerText: {
    position: "absolute",
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
});
