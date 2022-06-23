import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Status } from "./Status";

const Card = ({ item, onPress }) => (
  <View style={styles.cardContainer}>
    <TouchableOpacity onPress={onPress} style={styles.cardHeader}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImg} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
    <Status state={item.stats.status} />
  </View>
);

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 15,
    elevation: 7,
    shadowRadius: 2,
    backgroundColor: "#fafafa",
    margin: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  cardText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
    flexWrap: "wrap",
  },
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});
