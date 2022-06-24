import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getCoupleCharts } from "../Api/anitop";
import { CardVertical } from "../Components/CardVertical";
import { Header } from "../Components/Header";
import { Switcher } from "../Components/Switcher";

export const CouplePage = ({ navigation }) => {
  const [couple, setCouple] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (err) => {
    console.warn("Error Status:", err.message);
    console.warn("Error Message:", err.response.data);
    Alert.alert(`Error ${err.message}`, err.response.data.message);
  };

  const fetchCharts = async () => {
    try {
      setIsLoading(true);
      const res = await getCoupleCharts();
      const _couple = res.data.data;
      console.log("res:", _couple);

      setCouple(_couple);
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharts();
  }, []);

  const renderCharts = ({ item }) => {
    return <CardVertical item={item} />;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.propicContainer}
        onPress={() => navigation.navigate("About")}
      >
        <Image source={require("./asset/profile.png")} style={styles.propic} />
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={couple}
            keyExtractor={(item) => item.names[0] + item.names[1]}
            renderItem={renderCharts}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <>
                <Header type="couple" />
                <View style={styles.switchContainer}>
                  <Switcher type="couple" nav={navigation} />
                </View>
              </>
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
  },
  itemContainer: {
    flex: 1,
  },
  propicContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    maxWidth: 140,
    borderRadius: 50,
    marginLeft: -60,
    alignItems: "flex-end",
  },
  propic: {
    width: 50,
    height: 50,
  },
  switchContainer: {
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
  },
});
