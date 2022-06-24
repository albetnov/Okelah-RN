import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAnime } from "../Api/anitop";
import Card from "../Components/Card";
import { Header } from "../Components/Header";
import { Switcher } from "../Components/Switcher";

export default function Home({ navigation }) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (err) => {
    console.warn("Error Status:", err.message);
    console.warn("Error Message:", err.response.data);
    Alert.alert(`Error ${err.message}`, err.response.data.message);
  };

  const fetchAnime = async () => {
    try {
      setIsLoading(true);
      const res = await getAnime();
      const _anime = res.data.data;
      console.log("res:", _anime);

      setAnime(_anime);
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  const renderAnime = ({ item }) => {
    const onPress = () => navigation.navigate("AnimeDetail", { item });

    return <Card onPress={onPress} item={item} />;
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
            data={anime}
            keyExtractor={(item) => item.title}
            renderItem={renderAnime}
            ListHeaderComponent={
              <>
                <Header type="anime" />
                <View style={styles.switchContainer}>
                  <Switcher type="anime" nav={navigation} />
                </View>
              </>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginTop: 5,
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
});
