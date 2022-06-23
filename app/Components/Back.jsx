import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Back = ({ onPress }) => (
  <TouchableOpacity style={styles.topBar} onPress={onPress}>
    <Image source={require("../Screens/asset/back.png")} style={styles.back} />
    <Text style={styles.backText}>Back</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  back: {
    width: 35,
    height: 30,
  },
  backText: {
    marginLeft: 10,
    fontSize: 14,
  },
});
