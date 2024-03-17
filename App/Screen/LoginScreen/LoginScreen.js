import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import LoginImg from "../../../assets/Image/evLogin.png";
import styles from "./LogiScreen.Style";

const LoginScreen = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.logo}>
        EV <Text style={styles.station}>STATION</Text>
      </Text>
      <Image source={LoginImg} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Plug In & Power Up: Your Ultimate EV Station Finder
        </Text>
        <Text style={styles.des}>
          Discover the nearest charging spots with ease. Quick, reliable, and
          always ready to guide your eco-friendly journey.
        </Text>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginBtnText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
