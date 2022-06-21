import React from "react";
import "react-native-gesture-handler";
// import MainApp from "./app/index";
import Card from "./app/Components/Card";

export default function App() {
  const item = {
    title: "Test",
    imageUrl:
      "https://i1.wp.com/anitrendz.net/news/wp-content/uploads/thumbnails/chart-thumbnails/top-anime-summer-time-rendering.jpg",
  };
  // return <MainApp />;
  return <Card item={item} />;
}
