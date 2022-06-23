import React from "react";
import { StyleSheet, Text } from "react-native";

export const Status = ({ state }) => {
  return state === "Improved" ? (
    <Text
      style={[styles.status, { backgroundColor: "#66bb6a", color: "#1b5e20" }]}
    >
      Improved
    </Text>
  ) : state === "Unchanged" ? (
    <Text
      style={[styles.status, { backgroundColor: "#78909c", color: "#37474f" }]}
    >
      Unchanged
    </Text>
  ) : (
    <Text
      style={[styles.status, { backgroundColor: "#ef5350", color: "#c62828" }]}
    >
      Declined
    </Text>
  );
};

const styles = StyleSheet.create({
  status: {
    padding: 5,
    borderRadius: 30,
    fontWeight: "bold",
    opacity: 85,
  },
});
