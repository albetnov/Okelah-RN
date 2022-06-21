import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Login from "../Screens/LoginField";
import About from "../Screens/AboutPage";
import Home from "../Screens/HomePage";
import { getApps, initializeApp } from "firebase/app";

const Stack = createStackNavigator();

export default function Route() {
  const email = useSelector((state) => state.auth.email);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  const firebaseConfig = {
    apiKey: "AIzaSyCEXdbvC77U7uKEaAInbHWgWbKHAWnR1ug",
    authDomain: "sanberapps-46455.firebaseapp.com",
    projectId: "sanberapps-46455",
    storageBucket: "sanberapps-46455.appspot.com",
    messagingSenderId: "173110720817",
    appId: "1:173110720817:web:d78851d0b5a0d025499810",
  };

  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const checkForAuth = () => {
    if (isSignedIn) {
      return true;
    }
    return false;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {checkForAuth() ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}