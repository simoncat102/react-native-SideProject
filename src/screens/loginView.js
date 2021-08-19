import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function login() {
  return (
    <>
      {/* 透過這個"<>"可以在同一頁有多個view */}
      <View style={styles.container} name="login">
        {/* <Image
          source={require('/Users/mac/本機檔案/side-project/assets/images/logo.jpeg')}
          style={styles.logo}
        /> */}
        {/* 放照片的方法 "sourse為來源 styles.logo 有點像css" */}

        {/* 有背景的button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Sign In </Text>
        </TouchableOpacity>

        {/* 基礎的按鍵 */}
        {/* flexDirection 讓他可以變成並排 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textFamily}>first time here?</Text>
          <TouchableOpacity style={styles.signButton}>
            <Text style={styles.signButtonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

// sytle放這邊
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  textFamily: {
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 12,
  },
  logo: {
    width: 100,
    height: 100,
    // flex:1,
    marginTop: 100,
  },
  button: {
    margin: 20,
    marginTop: 20,
    padding: 10,
    paddingLeft: 135,
    paddingRight: 135,

    backgroundColor: "#2b2b2b",
  },
  buttonText: {
    color: "#f9f9f9",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  signButton: {
    fontSize: 12,
    fontFamily: "Verdana",
    color: "#2b2b2b",
  },
  signButtonText: {
    color: "#2b2b2b",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
});
