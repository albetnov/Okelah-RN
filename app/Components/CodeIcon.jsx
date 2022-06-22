import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

const CodeIcon = () => {
  const showToast = () => {
    ToastAndroid.show("Programming Language", ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity
      onPress={showToast}
      style={[
        {
          backgroundColor: "#F8F5F5",
        },
        styles.circle,
        styles.stackTechText,
        styles.stackTechShadow,
      ]}
    >
      <Image
        source={require("../Screens/asset/code.png")}
        style={styles.typeIcon}
      />
    </TouchableOpacity>
  );
};

export default CodeIcon;

const styles = StyleSheet.create({
  circle: {
    width: 32,
    height: 31,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stackTechShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  stackTechText: {
    marginTop: 10,
    marginLeft: 10,
  },
  typeIcon: {
    width: 20,
    height: 20,
  },
});
