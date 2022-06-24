import { getAuth, signOut } from "firebase/auth";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Back } from "../Components/Back";
import CodeIcon from "../Components/CodeIcon";
import FrameworkIcon from "../Components/FrameworkIcon";
import { modifyAuth } from "../Redux/authSlice";

export default function AboutPage({ navigation }) {
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();

  const logout = () => {
    signOut(getAuth())
      .then(() => {
        console.log("Signed out.");
        dispatch(modifyAuth({ email: "", isSignedIn: false }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Back onPress={() => navigation.pop()} />
      <View>
        <Text style={styles.title}>About Me</Text>
        <View style={[styles.textDivider, { width: "55%" }]}></View>
      </View>
      <View style={styles.aboutContainer}>
        <Image source={require("./asset/profile.jpg")} style={styles.propic} />
        <View style={styles.info}>
          <Text style={styles.textMd}>Nama:</Text>
          <Text style={styles.textMd}>Albet Novendo</Text>
          <Text style={[styles.textMd, styles.mtSmall]}>Title: </Text>
          <Text style={styles.textMd}>Developer</Text>
          <Text style={[styles.textMd, styles.mtSmall]}>Contact Number:</Text>
          <Text style={styles.textMd}>+85 11140 5456</Text>
          <Text style={[styles.textMd, styles.mtSmall]}>Email:</Text>
          <Text style={styles.textMd}>{email}</Text>
          <TouchableOpacity style={styles.logout} onPress={logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={[styles.textMd, styles.mtMedium]}>
          Social Media and Links
        </Text>
        <View
          style={[styles.textDivider, styles.mtSmall, { width: "50%" }]}
        ></View>
      </View>
      <View style={styles.inlineSocials}>
        <View style={styles.socialContainer}>
          <Image
            source={require("./asset/facebook_icon.png")}
            style={[styles.socialIcon, styles.mtBig]}
          />
          <Text style={[styles.links, styles.socialText]}>Example Profile</Text>
        </View>
        <View style={styles.socialContainer}>
          <Image
            source={require("./asset/github_icon.png")}
            style={[styles.socialIcon, styles.mtBig]}
          />
          <Text style={[styles.links, styles.socialText]}>@albetnov</Text>
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Image
          source={require("./asset/instagram_icon.png")}
          style={[styles.socialIcon, styles.mtBig]}
        />
        <Text style={[styles.links, styles.socialText]}>@exampleProfile</Text>
      </View>
      <View style={styles.socialContainer}>
        <Image
          source={require("./asset/twitter_icon.png")}
          style={[styles.socialIcon, styles.mtBig]}
        />
        <Text style={[styles.links, styles.socialText]}>@ExampleProfile</Text>
      </View>
      <View>
        <Text style={[styles.textMd, styles.mtMedium]}>Stack Tech</Text>
        <View
          style={[styles.textDivider, styles.mtSmall, { width: "30%" }]}
        ></View>
      </View>
      <View style={styles.inlineStackTech}>
        <View style={styles.socialContainer}>
          <Image
            source={require("./asset/laravel_icon.png")}
            style={[styles.socialIcon, styles.mtMedium]}
          />
          <Text
            style={[styles.textMd, styles.stackTechText, { color: "#E62535" }]}
          >
            Laravel
          </Text>
          <View style={styles.stackDetails}>
            <View
              style={[
                { backgroundColor: "#039BE5" },
                styles.circle,
                styles.stackTechText,
              ]}
            >
              <Text style={styles.circleText}>60%</Text>
            </View>
            <FrameworkIcon />
          </View>
        </View>
        <View style={[styles.socialContainer, { marginLeft: 10 }]}>
          <Image
            source={require("./asset/kt_icon.png")}
            style={[styles.socialIcon, styles.mtMedium]}
          />
          <Text
            style={[styles.textMd, styles.stackTechText, { color: "#0095D5" }]}
          >
            Kotlin
          </Text>
          <View style={styles.stackDetails}>
            <View
              style={[
                { backgroundColor: "#039BE5" },
                styles.circle,
                styles.stackTechText,
              ]}
            >
              <Text style={styles.circleText}>60%</Text>
            </View>
            <CodeIcon />
          </View>
        </View>
      </View>
      <View style={styles.socialContainer}>
        <Image
          source={require("./asset/php_icon.png")}
          style={[styles.socialIcon, styles.mtMedium]}
        />
        <Text
          style={[styles.textMd, styles.stackTechText, { color: "#00BCD4" }]}
        >
          PHP
        </Text>
        <View style={styles.stackDetails}>
          <View
            style={[
              { backgroundColor: "#0277BD" },
              styles.circle,
              styles.stackTechText,
            ]}
          >
            <Text style={styles.circleText}>60%</Text>
          </View>
          <CodeIcon />
        </View>
      </View>
      <View style={[styles.socialContainer, { marginBottom: 50 }]}>
        <Image
          source={require("./asset/js_icon.png")}
          style={[styles.socialIcon, styles.mtMedium]}
        />
        <Text
          style={[styles.textMd, styles.stackTechText, { color: "#FFD600" }]}
        >
          Javascript
        </Text>
        <View style={styles.stackDetails}>
          <View
            style={[
              { backgroundColor: "#81D4FA" },
              styles.circle,
              styles.stackTechText,
            ]}
          >
            <Text style={styles.circleText}>60%</Text>
          </View>
          <CodeIcon />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: "500",
    marginLeft: 10,
  },
  textDivider: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  aboutContainer: {
    flexDirection: "row",
    padding: 2,
    alignItems: "center",
  },
  propic: {
    width: 194,
    height: 296,
    borderRadius: 42,
    marginTop: 30,
  },
  info: {
    marginLeft: 10,
  },
  textMd: {
    fontSize: 16,
  },
  mtSmall: {
    marginTop: 7,
  },
  mtMedium: {
    marginTop: 15,
  },
  mtBig: {
    marginTop: 25,
  },
  inlineSocials: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialIcon: {
    width: 35,
    height: 35,
  },
  socialText: {
    marginLeft: 5,
    marginTop: 20,
  },
  links: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#0094FF",
  },
  stackTechText: {
    marginTop: 10,
    marginLeft: 10,
  },
  inlineStackTech: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 32,
    height: 31,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    color: "white",
    fontWeight: "900",
  },
  stackDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeIcon: {
    width: 20,
    height: 20,
  },
  stackTechShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  logout: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#424242",
  },
});
