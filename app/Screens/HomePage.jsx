import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAnime } from "../Api/anitop";
import Card from "../Components/Card";

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
    const onPress = () => console.log("Pressed");

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
      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={anime}
            keyExtractor={(item) => item.title}
            renderItem={renderAnime}
          />
        )}
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
