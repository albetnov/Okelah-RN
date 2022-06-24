import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const Switcher = ({ type, nav }) => {
  if (type == "anime") {
    return (
      <View style={styles.container}>
        <View style={[styles.imgContainer, styles.active]}>
          <Image
            style={styles.img}
            source={require("../Screens/asset/anime_switch.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => nav.navigate("Couple")}
        >
          <Image
            style={styles.img}
            source={require("../Screens/asset/couple_switch.png")}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => nav.navigate("Home")}
        >
          <Image
            style={styles.img}
            source={require("../Screens/asset/anime_switch.png")}
          />
        </TouchableOpacity>
        <View style={[styles.imgContainer, styles.active]}>
          <Image
            style={styles.img}
            source={require("../Screens/asset/couple_switch.png")}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
    elevation: 7,
    borderRadius: 50,
    marginVertical: 10,
  },
  imgContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 3,
  },
  img: {
    height: 30,
    width: 50,
    resizeMode: "center",
  },
  active: {
    backgroundColor: "#e0e0e0",
    elevation: 0,
  },
});
