import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const CardVertical = ({ item }) => (
  <View style={styles.cardContainer}>
    <View style={styles.coupleContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.coupleImages.imageUrlOne }}
          style={styles.img}
        />
        <Text style={styles.text}>{item.names[0]}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: item.coupleImages.imageUrlTwo }}
          style={styles.img}
        />
        <Text style={styles.text}>{item.names[1]}</Text>
      </View>
    </View>
    <Text style={styles.title}>{item.anime}</Text>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderRadius: 15,
    elevation: 7,
    shadowRadius: 2,
    backgroundColor: "#fafafa",
    margin: 5,
    alignItems: "center",
    minWidth: "85%",
    maxWidth: "85%",
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "500",
    color: "#87805E",
  },
  coupleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "#B09B71",
  },
});
