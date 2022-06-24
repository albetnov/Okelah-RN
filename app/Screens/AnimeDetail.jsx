import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Back } from "../Components/Back";
import { Status } from "../Components/Status";
import { BlurView } from "expo-blur";

export const AnimeDetail = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Back onPress={() => navigation.pop()} />
      <View style={styles.headerContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.img} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.title}</Text>
          <Text>Studio: {item.studio}</Text>
        </View>
        <Status state={item.stats.status} />
      </View>
      <View style={styles.cardContainer}>
        <BlurView intensity={35} tint="dark" style={styles.card}>
          <View style={styles.stats}>
            <Image
              source={require("./asset/peak.png")}
              style={styles.statsIcon}
            />
            <Text style={styles.statsText}>{item.stats.peak}</Text>
          </View>
          <View style={styles.stats}>
            <Image
              source={require("./asset/previously.png")}
              style={styles.statsIcon}
            />
            <Text style={styles.statsText}>{item.stats.previously}</Text>
          </View>
          <View style={styles.stats}>
            <Image
              source={require("./asset/week.png")}
              style={styles.statsIcon}
            />
            <Text style={styles.statsText}>{item.stats.weeksOnTop}</Text>
          </View>
          <View style={styles.stats}>
            <Image
              source={require("./asset/stat.png")}
              style={styles.statsIcon}
            />
            <Text style={styles.statsText}>{item.stats.stat}</Text>
          </View>
        </BlurView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  headerContainer: {
    marginTop: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    marginLeft: 10,
    flexShrink: 1,
    marginHorizontal: 2,
  },
  heading: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    borderRadius: 15,
    padding: 10,
    width: 200,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#455a64",
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  statsIcon: {
    width: 40,
    height: 40,
    tintColor: "#87805E",
  },
  statsText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "400",
    color: "#87805E",
  },
});
