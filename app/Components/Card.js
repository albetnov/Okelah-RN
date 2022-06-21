import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = ({ item, onPress, onDelete }) => (
  <View style={styles.cardContainer}>
    <TouchableOpacity onPress={onPress} style={styles.cardHeader}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImg} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.closeContainer} onPress={onDelete}>
      <Text style={styles.close}>X</Text>
    </TouchableOpacity>
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
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  closeContainer: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#9e9e9e",
    opacity: 90,
    elevation: 7,
  },
  close: {
    color: "#707070",
    fontWeight: "bold",
    fontSize: 15,
  },
});
