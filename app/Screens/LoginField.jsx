import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { modifyAuth } from "../Redux/authSlice";
import * as auth from "firebase/auth";

const LoginField = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (email.search("[@]") == -1) {
      return Alert.alert("Login error", "Email invalid");
    }
    if (password.trim() == "") {
      return Alert.alert("Login error", "Password tidak boleh kosong");
    }
    const currentAuth = auth.getAuth();
    auth
      .signInWithEmailAndPassword(currentAuth, email, password)
      .then(() => {
        console.log("Login berhasil");
        dispatch(modifyAuth({ email, isSignedIn: true }));
      })
      .catch((e) => {
        Alert.alert("Login error", e.message);
      });
    setEmail("");
    setPassword("");
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require("./asset/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.textHeading}>Login</Text>
      <View style={styles.formWrapper}>
        <Image
          source={require("./asset/email_icon.png")}
          style={styles.formLogo}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Enter your email here..."
          onChangeText={handleChangeEmail}
          value={email}
        ></TextInput>
      </View>
      <View style={styles.formWrapper}>
        <Image
          source={require("./asset/key_icon.png")}
          style={styles.formLogo}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Enter your password here..."
          onChangeText={handleChangePassword}
          secureTextEntry={true}
          value={password}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={[styles.buttonLg, styles.btnShadow]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonLgText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <TouchableOpacity style={[styles.buttonLgIcon, styles.btnShadow]}>
        <Image
          source={require("./asset/google_icon.png")}
          style={styles.buttonLgIconImg}
        />
        <Text style={styles.buttonLgIconText}>Login With Google</Text>
      </TouchableOpacity>
      <Text style={[styles.paragraph, styles.mtLg]}>
        Don't have an account?{" "}
        <Text
          style={styles.links}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up!
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  logoWrapper: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  textHeading: {
    fontSize: 36,
    fontWeight: "500",
  },
  formWrapper: {
    flexDirection: "row",
    padding: 10,
  },
  formLogo: {
    marginTop: 20,
    width: 24,
    height: 28,
  },
  formInput: {
    marginTop: 20,
    marginLeft: 15,
    width: "80%",
    height: 28,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  buttonLg: {
    marginTop: 110,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#29B6F6",
    opacity: "75%",
    borderRadius: 15,
  },
  btnShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonLgText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#017EC2",
  },
  divider: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderColor: "#B9B3B3",
    alignItems: "center",
  },
  buttonLgIcon: {
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#EDEEEF",
    opacity: "75%",
    borderRadius: 15,
  },
  buttonLgIconText: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: "#898989",
  },
  buttonLgIconImg: {
    width: 45,
    height: 45,
  },
  mtLg: {
    marginTop: 45,
  },
  paragraph: {
    fontSize: 16,
  },
  links: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#0094FF",
  },
});

export default LoginField;
